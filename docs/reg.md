---
map:
  # 组件所属类别 ==》 不给此选项默认存入common类别
  type: 工具
  # 组件侧边栏显示标题 ==》 不给此选项默认采用路径名称作为名称
  name: 正则验证
  # 映射到docs的路径 ==》 必传项不传不显示
  path: /reg
---

# 常用正则验证方法

## 用户名：数字/字母组合
<table>
  <thead>
    <tr>
      <td>参数</td>
      <td>返回值</td>
      <td>所用正则</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div>string，必需，要检测的字符串。</div>
        <div>max，非必需，最大位数，默认16。</div>
        <div>min，非必需，最小位数，默认6。</div>
      </td>
      <td>bool</td>
      <td>`^[A-Za-z0-9]{${min},${max}}$`</td>
    </tr>
  </tbody>
</table>

```javascript
import { regUserName } from '@datawis/fly-helper'
regUserName(string,min,max)
```

## 密码：数字/字母/符号组合
<table>
  <thead>
    <tr>
      <td>参数</td>
      <td>返回值</td>
      <td>所用正则</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
       <div>string，必需，要检测的字符串。</div>
        <div>max，非必需，最大位数，默认16。</div>
        <div>min，非必需，最小位数，默认6。</div>
      </td>
      <td>bool</td>
      <td>`^[\x21-\x7E]{${min},${max}}$`</td>
    </tr>
  </tbody>
</table>

```javascript
import { regPassword } from '@datawis/fly-helper'
regPassword(string,min,max)
```

## 真实姓名：中文或英文名
<table>
  <thead>
    <tr>
      <td>参数</td>
      <td>返回值</td>
      <td>所用正则</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div>string，必需，要检测的字符串。</div>
        <div>max，非必需，最大位数，默认16。</div>
        <div>min，非必需，最小位数，默认2。</div>
      </td>
      <td>bool</td>
      <td>`^([\u4e00-\u9fa5]{${min},${max}}|[A-Za-z]{${min},${max}})$`</td>
    </tr>
  </tbody>
</table>

```javascript
import { regRealName } from '@datawis/fly-helper'
regRealName(string,min,max)
```

## 电话号码：支持座机或手机号码
<table>
  <thead>
    <tr>
      <td>参数</td>
      <td>返回值</td>
      <td>所用正则</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>string，必需，要检测的字符串。</td>
      <td>bool</td>
      <td>/^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/</td>
    </tr>
  </tbody>
</table>

```javascript
import { regPhoneNumber } from '@datawis/fly-helper'
regPhoneNumber(string)
```