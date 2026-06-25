


数据的 **FE 动作**（清洗、合并、特征生成）在 PyTorch 数据加载之前已完成，本文聚焦 PyTorch 数据加载，不涉及 FE 工作

## 1. 数据加载流程

![[Pasted image 20260502102431.png]]
1. Dataset（定义数据集载体）
	- Ingestion (读取源数据) ： Disk to Mem (硬盘到内存)
	- Sample Retrieval (样本提取) `__getitem__(idx)` 
		它是Lazy Loading（延迟加载）的核心，DataLoader按需取数
2. Transforms（数据增强/变换）
	- Preprocessing 预处理
	- Augmentation 增强
3. DataLoader（核心控制器）
		Batching (组合)：将单条数据 `(x, y)` 堆叠成张量 `(Batch_X, Batch_y)`
4. Parallelism（并行处理）
		Multi-threaded Dispatch (多线程调度) ： 通过 `num_workers` 分发到内存
5. Data Transfer (to Device)
	 - in_memory=True 锁定内存

## 2. 数据加载方式
主要讲数据 `从磁盘(或远端服务器磁盘)到内存` 的加载方式

| **方法**          | **核心特点**           | **应用建议**            |              |
| --------------- | ------------------ | ------------------- | ------------ |
| **Sequential**  | 按索引 0, 1, 2... 顺序读 | 仅用于 RAG 初始数据清洗或推理。  |              |
| **Bulk**        | 追求一次性高吞吐量写入        | 向量数据库初始化、数据库迁移。     |              |
| **Incremental** | 只搬运变化的“增量”         | **RAG 长期维护的必选项**。   |              |
| **Shuffled**    | 打乱顺序随机读            | **模型训练的强制标准**。      | shuffle=True |
| **Streaming**   | 实时随到随加载            | 实时舆情监控、在线 Agent 反应。 |              |

- **全量加载  Bulk loading（一次性读入内存）：**
    
    - **影响**：内存占用与数据集大小成 **1:1 线性关系**。
    - **传输**：一旦加载完成，subsequent operations 极其高效，避免磁盘IO
        
    - **风险**：如果数据集是 100GB，而你的机器（比如在温尼伯实验室的电脑）只有 32GB 内存，程序会在启动阶段直接触发 `Out of Memory (OOM)` 崩溃。
    - 场景： 教学环境 小规模数据量
        
- **顺序加载 Sequential loading**
	- 按批次加载， 按需执行
	- 直到数据被需要时，才会读到内存
		
	- **优势**：Memory Efficiency；没有漫长的初始化阶段，几乎可以立即加载立即处理
	- **劣势**：
		- 重复磁盘IO，较慢
		- IO瓶颈： 取下一批数据时， GPU闲置一小段时间
---

## 3. 数据采样 Sampler

#### Sampler 在 DataLoader 中的角色

| 组件 | 职责 | 类比 |
|------|------|------|
| **Dataset** | 存储数据，提供索引访问 `__getitem__` | 仓库 |
| **Sampler** | 决定采样顺序/优先级 | 调度中心 |
| **DataLoader** | 按 Sampler 指令取数据，组成 batch | 物流车队 |

#### 类别不平衡的采样策略

| 策略 | 场景 | 方法 |
|------|------|------|
| **下采样** (Under-sampling) | 多数类过多 | 随机丢弃部分多数类样本 |
| **上采样** (Over-sampling) | 少数类过少 | `WeightedRandomSampler` 提高少数类权重 |

#### Transform（空间维度变换）

- **下采样** (Down-sampling)：降低分辨率，如 1024×1024 → 224×224
- **上采样** (Up-sampling)：提高分辨率，如超分辨率重建
- 工具：`torchvision.transforms` / `F.interpolate`

#### 常用 PyTorch Sampler 类

| Sampler | 用途 |
|---------|------|
| `SequentialSampler` | 按顺序遍历数据集 |
| `RandomSampler` | 随机无放回采样 |
| `WeightedRandomSampler` | 按权重随机采样（支持放回），常用于类别不平衡 |
| `BatchSampler` | 将另一个 Sampler 的样本打包成 batch |
| `DistributedSampler` | 多 GPU 分布式训练时划分数据子集 |

---

## 4. collate_fn（自定义批次组装）

**作用**：DataLoader 默认将样本堆叠成 batch，自定义 `collate_fn` 可控制组装逻辑。

**常见场景**：
- **变长序列**：NLP 中不同句子长度不同，需 padding 后堆叠
- **嵌套数据**：如图像 + 边界框 + 标签的组合
- **后处理**：在 batch 层面做归一化、数据增强

```python
def collate_fn(batch):
    # batch: List[(img, label), (img, label), ...]
    imgs, labels = zip(*batch)
    # 填充到相同长度
    imgs = torch.nn.utils.rnn.pad_sequence(imgs, batch_first=True)
    return torch.stack(imgs), torch.tensor(labels)
```

---

## 5. pin_memory（内存锁页）

**作用**：将数据锁定在 RAM 中，防止被 swap 到磁盘，加速 CPU→GPU 传输。

| 配置 | 效果 |
|------|------|
| `pin_memory=False` | 数据传输时需先拷贝到锁页内存，慢 |
| `pin_memory=True` | 直接使用锁页内存，DMA 传输更快 |

```python
loader = DataLoader(dataset, batch_size=64, pin_memory=True)
```

**注意**：开启后 RAM 消耗增加，适用于数据量可完全放入内存的场景。

---

## 6. num_workers 调优

**作用**：指定加载数据的子进程数，`0` 为主进程加载。

| num_workers | 场景 | 注意事项 |
|-------------|------|---------|
| `0` | 小数据集、调试阶段 | 无多进程开销 |
| `2~4` | 中等规模，CPU 核心充足 | 主流选择 |
| `8+` | 大型数据集，高效 GPU 利用 | 需确保磁盘 IO 不是瓶颈 |

**常见问题**：
- `num_workers` 过大 → 内存激增、死锁
- Windows 必须 `0` 或使用 `multiprocessing spawn`
- 数据集含随机操作（数据增强）时，多 worker 可能导致不一致（需设置 `worker_init_fn`）

```python
def worker_init_fn(worker_id):
    np.random.seed(42 + worker_id)

loader = DataLoader(dataset, num_workers=4, worker_init_fn=worker_init_fn)
```

---

## 7. 自定义 Dataset

核心：继承 `Dataset`，实现 `__len__` 和 `__getitem__`。

```python
class MyDataset(Dataset):
    def __init__(self, data_path, transform=None):
        self.data = pd.read_csv(data_path)
        self.transform = transform

    def __len__(self):
        return len(self.data)

    def __getitem__(self, idx):
        row = self.data.iloc[idx]
        image = load_image(row['path'])
        label = row['label']
        if self.transform:
            image = self.transform(image)
        return image, label
```

**关键点**：Lazy Loading — 不在 `__init__` 中加载全部数据，按需加载避免内存爆炸。

---

## 8. DataLoader 状态持久化

训练中断后恢复迭代器状态，避免重新 shuffle。

```python
# 保存 epoch + random state
state = {
    'epoch': epoch,
    'random_state': torch.get_rng_state(),
    'loader_state': loader.state_dict()
}
torch.save(state, 'checkpoint.pth')

# 恢复
checkpoint = torch.load('checkpoint.pth')
torch.set_rng_state(checkpoint['random_state'])
loader.load_state_dict(checkpoint['loader_state'])
```

**注意**：`DataLoader` 的 `state_dict()` 仅保存 sampler 状态，不保存 dataset 游标位置。
