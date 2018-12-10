const sidebar = {
    '/WEB/': [{
            title: 'Vue',
            children: [
                'Vue/blog'
            ]
        },

        {
            title: 'React',
            children: [
                'React/react-router'
            ]
        }
    ],

   '/Life/': [{
           title: 'Movies',
           children: [
               'Movies/blog'
           ]
       },

       {
           title: 'Music',
           children: [
               'Music/shop'
           ]
       }
   ],

    '/About/': [{
            title: 'About',
            children: [
                'About/readme'
            ]
        },
    ]



}

const nav = [
    {
        text: 'Works',
        items: [
            { text: 'Vue', link: '/WEB/' + sidebar['/WEB/'][0]['children'][0] },
            { text: 'React', link: '/WEB/' + sidebar['/WEB/'][1]['children'][0] }
        ]
    },
    {
        text: 'Life',
        items: [{
                text: 'Movies',
                link: '/Life/' + sidebar['/Life/'][0]['children'][0]
            },
            {
                text: 'Music',
                link: '/Life/' + sidebar['/Life/'][1]['children'][0]
            }
        ]
    },
    {
        text: "About",
        items: [{
                text: 'About',
                link: '/About/' + sidebar['/About/'][0]['children'][0]
            },
        ]
    }




]




var config = {

    // 静态网站部署的目录
    base: '/',

    // 网站标题
    title: '德先生的乐',
    head: [
        ['link', { rel: 'icon', href: 'favicon.ico' }]
    ],


    // <meta name="description" content="...">
    description: '无可寄托者,用心躁也.',

    markdown: {

        // 显示代码行号
        lineNumbers: true
    },
    themeConfig: {
        // 项目的 github 地址
        repo: '7wong/7wong',

        // github 地址的链接名
        repoLabel: 'GitHub',

        // 当前 markdown 的 github 代码链接
        //editLinks: true,

        // 链接显示的文本
        //editLinkText: '查看原文|编辑此页',
        // 配置导航栏
        nav,
        sidebar,
    }



}


module.exports = config