module.exports = {
    title: 'Orangex - 橙式',
    description: 'Orangex Docs',
    head: [
        ['link', { rel: 'icon', href: '/assets/img/logo.png' }]
    ],
    themeConfig: {
        sidebarDepth: 2,
        sidebar: {
            '/install/': [
                ''
            ],
            '/hello/': [
                ''
            ],
            '/further/': [
                ''
            ],
            '/python/': [
                '',
                'spider'
            ],
            '/javascript/': [
                '',
                'nodejs',
                'html',
                'css',
                'markdown',
                'hexo'
            ],
            '/cpp/': [
                ''
            ],
            '/java/': [
                '',
                'app'
            ],
            '/git/': [
                '',
                'github'
            ],
            '/termux/': [
                '',
                'orangex'
            ],
            '/': [
                ''
            ]
        },
        nav: [
            { text: '介绍', link: '/' },
            { text: '安装', link: '/install/' },
            { text: 'Hello World', link: '/hello/' },
            { text: '进阶路线', link: '/further/' },
            {
                text: 'Python', 
                items: [
                    { text: 'Python', link: '/python/' },
                    { text: '爬虫', link: '/python/spider.html' }
                ]
            },
            {
                text: 'JavaScript', 
                items: [
                    { text: 'JavaScript', link: '/javascript/' },
                    { text: 'NodeJS', link: '/javascript/nodejs.html' },
                    { text: 'HTML', link: '/javascript/html.html' },
                    { text: 'CSS', link: '/javascript/css.html' },
                    { text: 'Markdown', link: '/javascript/markdown.html' },
                    { text: '搭建博客', link: '/javascript/hexo.html' }
                ]
            },
            { text: 'C++', link: '/cpp/' },
            {
                text: 'Java', 
                items: [
                    { text: 'Java', link: '/java/' },
                    { text: '开发 APP', link: '/java/app.html' },
                ]
            },
            {
                text: 'Git', 
                items: [
                    { text: 'Git', link: '/git/' },
                    { text: 'GitHub', link: '/git/github.html' },
                ]
            },
            {
                text: 'Termux', 
                items: [
                    { text: 'Termux', link: '/termux/' },
                    { text: 'Orangex 相关配置', link: '/termux/orangex.html' },
                ]
            }
        ]
    }
}