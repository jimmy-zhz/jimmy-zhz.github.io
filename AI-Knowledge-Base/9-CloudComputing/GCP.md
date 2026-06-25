| **Google Cloud (GCP)** | **Amazon Web Services (AWS)** | **Microsoft Azure**     | **备注**                                    |
| ---------------------- | ----------------------------- | ----------------------- | ----------------------------------------- |
| **BigQuery**           | Amazon Redshift               | Azure Synapse Analytics | **数据仓库**：用于快速、大规模的数据分析。                   |
| **Cloud Dataproc**     | Amazon EMR                    | Azure Databricks        | **大数据集群**：托管的 Apache Hadoop 和 Spark 计算平台。 |
| **Cloud Storage**      | Amazon S3                     | Azure Data Lake Gen 2   | **对象存储**：用于存放原始数据的海量、高扩展存储。               |
| **Google Vertex AI**   | AWS SageMaker                 | Azure ML                | **机器学习平台**：一站式 AI/ML 模型开发与部署。             |
| **Dataflow**           | AWS Glue                      | Azure DataFactory       | **数据流水线**：用于数据集成、清洗与流/批处理的 ETL 工具。        |
| **Looker Studio**      | AWS QuickSight                | Power BI                | **数据可视化**：自助式商业智能（BI）与仪表盘制作。              |

#### BigQuery
其他竞品：
- Amazon Redshift

#### Vertex AI 

除了写代码的“企业版 Colab”，它还包含：

- **AutoML（零代码/低代码训练）：** 你只要把图片、表格或文本传上去，不需要写任何代码，Vertex AI 自动帮你训练出高质量的模型。
    
- **Vertex AI Pipelines（流水线）：** 类似于数据工程里的 Airflow，用来把数据预处理、模型训练、模型评估编排成自动化流水线。
    
- **Vertex AI Feature Store（特征商店）：** 供全公司不同团队共享和复用特征数据，避免重复造轮子。
    
- **Model Registry & Prediction（模型仓库与部署）：** 训练好的模型一键部署成 API 接口，自动根据流量动态缩放（类似于 Kubernetes 的高并发托管，Colab 做不到这一点）。
    
- **Model Monitoring（模型监控）：** 模型上线后，自动监控它的预测准确率有没有下滑（Data Drift）。
    
- **Generative AI Studio（生成式 AI 工作坊）：** 企业级调用、微调（Fine-tuning）和评估 Gemini 等大语言模型（LLM）的中心。

### Looker Studio

数据可视化与商业智能（BI）工具

竞品：
- Azure PowerBI
- SuperSet
- Tableau
- AWS QuickSight

#### Cloud Dataproc 
spark


<span class="title6-underscore">AWS EMR</span>

AWS 的 EMR 相当于“给老爷车换了特斯拉的发动机”
- 传统的 Hadoop（线下自建、依赖 HDFS、用 MapReduce）
- 云上的 Hadoop 生态（托管 EMR、数据存 S3、计算用 Spark/Presto、弹性伸缩）