// .vuepress/theme/index.js
module.exports = (themeConfig, ctx) => {
  return {
    // ...
    plugins: [
      [
        '@vuepress/blog',
        {
          directories: [
            {
              id: 'post',
              dirname: '_posts', // 对应文章存放目录 与.vupress目录同级
              path: '/', // 文章列表页路径, 这里是首页
            }
          ],
          globalPagination: {
            lengthPerPage: 2,
          },
          frontmatters: [
            {
              id: "tag",
              keys: ['tag', 'tags'],
              path: '/tags/',
              frontmatter: { title: 'Tag' },
              pagination: {
                lengthPerPage: 10
              }
            },
            {
              id: "category",
              keys: ['category', 'categories'],
              path: '/categories/',
              frontmatter: { title: 'Category' },
              pagination: {
                lengthPerPage: 10,
                prevText: '',
                nextText: ''
              }
            }
          ]
        }
      ]
    ]
  }
}
