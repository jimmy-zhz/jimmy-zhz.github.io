---
copilot-command-context-menu-enabled: false
copilot-command-slash-enabled: false
copilot-command-context-menu-order: 160
copilot-command-model-key: deepseek-chat|deepseek
copilot-command-last-used: 0
---
<instruction>
请将选中的文本去掉原有markdown或html格式，使用 HTML 标签进行高亮处理：
- 去掉格式：对选中文本先去掉任何的markdown和html格式，仅保留文本内容
- 使用 `<font style="background-color: #FFFACD; color: #333333; padding: 4px; border-radius: 8px; text-shadow: 1px 1px 2px rgba(0,0,0,0.1); font-weight: bold;">选中文本</font>` 格式；
- 保留原始文本内容，仅添加高亮标记， 不要对选中文本内容(去掉格式后的文本)做其他任何调整；
- 只修改被选中的部分，不改动其他内容。
- 输出内容包含空格和换行时，应当trim掉

示例输入：<s>**示例文本**<s>  
去掉格式后的示例文本：示例文本
重新高亮处理后的示例输出：<font style="background-color: #FFFACD; color: #333333; padding: 4px; border-radius: 8px; text-shadow: 1px 1px 2px rgba(0,0,0,0.1); font-weight: bold;">示例文本</font>
</instruction>

<text>{copilot-selection}</text>