# 前端开发工具文档
此文档为工具使用说明文档，工具编写、发布请阅读项目中[README.md](/README.md)

### 文档编写
- 一种工具类型一个md文件，例如：正则验证类工具为`docs/reg.md`；
- 当需要添加新的工具类型时候类型在`docs`下新建`xxx.md`文件，并在`./.vitepress/config.js`中`themeConfig.sidebar.items`属性上添加新文件信息即可在左方侧边栏生成；
- 文档搜索：暂未开启，使用algolia，必须等文档上线后再行[配置](https://docsearch.algolia.com/apply/)，可查看[搭建教程](https://github.com/mqyqingfeng/Blog/issues/267)；