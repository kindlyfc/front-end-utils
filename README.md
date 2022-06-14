# fly-helper

前端工具库，编写、使用方法如下：

### 编写、发布
1. 新建或找到`src/xxx.ts`，进行工具方法编写，若新建`ts`文件，须在`src/index.ts`中声明并导出；
2. 新建或找到`test/xxx.test.ts`，进行工具测试脚本编写；
3. 执行`yarn run test`运行测试脚本；
4. 新建或找到`docs/xxx.md`，进行工具文档编写；
5. 执行`npm login`登录自己的npm账号，更改`package.json`中“version”，执行`npm publish`发布工具；
6. 请注意：未通过eslint校验或测试脚本的代码将提交失败；

### 使用

- 安装

```shell
npm install fly-helper --save

# or

yarn add fly-helper
```

- 使用示例

```javascript
import { isNumber } from 'fly-helper'

regUserName()
```

### 相关技术链接
- [模块打包器rollup](https://www.rollupjs.com/)
- [文档搭建vitepress](https://vitepress.vuejs.org/)
- [测试jest](https://www.jestjs.cn/)
- [发布npm包](https://juejin.cn/post/7052307032971411463)
- [eslint标准airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)