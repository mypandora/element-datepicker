# 日期选择器

### 依赖

Vue 2.6.14+

Element-UI 2.15.8+


### 安装

```
npm install @mypandora/element-datepicker
```

### 属性、事件、方法

兼容 element-ui datepicker 的所有属性、事件、方法

### 扩展之处

1. 支持半年度选择

2. 支持季度选择

3. 支持旬选择


###  日期格式

使用`format`指定输入框的格式；使用`value-format`指定绑定值的格式。

默认情况下，组件接受并返回`Date`对象。以下为可用的格式化字符串，以 UTC 2017年1月2日 03:04:05 为例：

:::warning
请注意大小写
:::

| 格式 | 含义 | 备注 | 举例 |
|------|------|------|------|
| `yyyy` | 年 | | 2017 |
| `BB` | 半年 | 仅 `value-format` 可用；使用 01, 02 表示| 201701|
| `B` | 半年 | 仅 `format` 可用，使用上半年、下半年表示 | 2017上半年|
| `QQ` | 季度 | 仅 `value-format` 可用；使用 01, 02, 03, 04 表示| 201701|
| `Q` | 季度 | 仅 `format` 可用，使用第一季度、第二季度、第三季度、第四季度表示 | 2017第一季度|
| `TT` | 旬 | 仅 `value-format` 可用；使用 01, 02, 03 表示| 20170101|
| `T` | 旬 | 仅 `format` 可用，使用上旬、中旬、下旬表示 | 2017年01月上旬|
| `M`  | 月 | 不补0 | 1 |
| `MM` | 月 | | 01 |
| `W`  | 周 | 仅周选择器的 `format` 可用；不补0 | 1 |
| `WW` | 周 | 仅周选择器的 `format` 可用 | 01 |
| `d`  | 日 | 不补0 | 2 |
| `dd` | 日 | | 02 |
| `H`  | 小时 | 24小时制；不补0 | 3 |
| `HH` | 小时 | 24小时制 | 03 |
| `h`  | 小时 | 12小时制，须和 `A` 或 `a` 使用；不补0 | 3 |
| `hh` | 小时 | 12小时制，须和 `A` 或 `a` 使用 | 03 |
| `m`  | 分钟 | 不补0 | 4 |
| `mm` | 分钟 | | 04 |
| `s`  | 秒 | 不补0 | 5 |
| `ss` | 秒 | | 05 |
| `A`  | AM/PM | 仅 `format` 可用，大写 | AM |
| `a`  | am/pm | 仅 `format` 可用，小写 | am |
| `timestamp` | JS时间戳 | 仅 `value-format` 可用；组件绑定值为`number`类型 | 1483326245000 |
| `[MM]` | 不需要格式化字符 | 使用方括号标识不需要格式化的字符 (如  [A] [MM])  | MM |

:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 显示类型 | string | year/halfyear/quarter/month/tenday/date/dates/tendays/months/quarters/halfyears/years week/datetime/datetimerange/ daterange/monthrange | date |
