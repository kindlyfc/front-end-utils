---
map:
  # 组件所属类别 ==》 不给此选项默认存入common类别
  type: 工具
  # 组件侧边栏显示标题 ==》 不给此选项默认采用路径名称作为名称
  name: 常用工具
  # 映射到docs的路径 ==》 必传项不传不显示
  path: /common
---

# 常用工具

## randomString：随机生成字符串
<table>
  <thead>
    <tr>
      <td>参数</td>
      <td>返回值</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>length，非必需，需要生成的字符串长度，默认6。</td>
      <td>生成的字符串</td>
    </tr>
  </tbody>
</table>

```javascript
import { randomString } from '@datawis/utils'
randomString(length)
```