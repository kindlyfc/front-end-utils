module.exports = {
  // 网站标题
  title: 'datawis前端工具、组件库',
  // 网站描述
  description: 'Interview with vitePress',
  // 打包目录 
  dest: './dist',
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  plugins: [
    '@vuepress/active-header-links',   // 页面滚动时自动激活侧边栏链接的插件
    '@vuepress/back-to-top',          // 返回顶部插件
    '@vuepress/medium-zoom',          // 图片预览插件
    '@vuepress/nprogress',        //页面顶部进度条
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ],
  // 主题配置
  themeConfig: {
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // },
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdated: 'Last Updated', // string | boolean
    // 启动页面丝滑滚动
    smoothScroll: true,
    sidebar: [
      {
        text: '工具',
        items: [
          { text: '正则验证', link: '/reg' },
          { text: '其他工具', link: '/index' }
        ]
      }
    ]
  }
}
