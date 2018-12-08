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
   ]





}

const nav = [
    {
        text: '前端栈',
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
        text: "about",
        link: "https://music.163.com"
    }




]




var config = {

    // 静态网站部署的目录
    base: '/',

    // 网站标题
    title: '德先生的乐',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],


    // <meta name="description" content="...">
    description: '种一棵树最好的时间是十年前，其次是现在',

    markdown: {

        // 显示代码行号
        lineNumbers: true
    },
    themeConfig: {
        // 项目的 github 地址
        repo: '7wong/7wong',

        // github 地址的链接名
        repoLabel: '代码',

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