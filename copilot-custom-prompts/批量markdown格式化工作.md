---
copilot-command-context-menu-enabled: false
copilot-command-slash-enabled: false
copilot-command-context-menu-order: 140
copilot-command-model-key: deepseek-chat|deepseek
copilot-command-last-used: 0
---
<instruction>
选中文档是从语雀导出的markdown格式，有些地方与obsidian不兼容，需要手动调整，请按照我给出的条件修复选中文档：
1. 对于多行formula公式，原文档是$ 公式\\换行\\公式 $, 需要修改为$$ 公式多行内容 $$
2. 对于单行公式，如$ \text{ReLU}(x) = \max(0, x) $，obsidian无法识别左$后，右$前带空格，需要调整为：$\text{ReLU}(x) = \max(0, x)$
3. 所有带有背景颜色的文本，如**<font style="background-color:#FBDE28;">函数组合</font>**， 需要在style里添加黑色，如果不给出颜色，obsidian会白天和夜间模式切换，影响显示，因此需要修改为**<font style="background-color:#FBDE28;color:black">函数组合</font>**，另外<font></font>修饰的文本无法再加粗，因此应当去掉**， 最终为 <font style="background-color:#FBDE28;color:black">函数组合</font>
4. 修复其他明显语法错误
5. 对于单独加颜色的文本， 去掉颜色修饰，如<font style="color:#0e0e0e;">示例文本</font>， 去掉后 示例文本
特别注意：你应当只返回修正后的文本内容，你的回答不应该包含其他任何内容
</instruction>

<text>{copilot-selection}</text>