# Vuepress 搭建带评论及自动部署的静态博客

> vuepress 是 Vue 驱动的静态站点生成工具  

* **本文仅介绍，搭建静态博客的过程，具体教程及文档请点击进入 [vuepress官网](https://vuepress.vuejs.org/ "vuepress")**  

## vuepress初始化

### 初始化

```sh
# 将 github 新创建的仓库克隆到本地
git clone git@github.com:7wong/7wong.git

# 进入项目
cd 7wong

# npm 初始化, 按照提示回车
npm init

# 安装 vuepress
npm i vuepress -D

# 安装 gh-pages
npm i gh-pages -D

# 创建一个 docs 目录
mkdir docs

# 创建一个 markdown 文件
echo '# Hello VuePress' > docs/README.md
```

### npm 脚本

然后，给 `package.json` 添加一些 `scripts` 脚本：

```json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs",
  }
}
```

### 运行本地开发环境

运行 `vurepress` 的本地开发环境

```sh
npm run dev
```

访问 `localhost:8080` ， 已经成功开启

## 基础配置

### 生成静态资源

执行下面的命令，生成静态资源 

```sh
npm run build
```
默认情况下，构建的文件会位于 **docs/.vuepress/dist** 中，该文件可以通过 **docs/.vuepress/config.js** 中的 `dest` 字段进行配置。

### 配置

创建 **docs/.vuepress/config.js**， 并进行简单配置

```js
var config = {

  // 静态网站部署的目录
  base: '/',

  // 网站标题
  title: '德先生的乐',

  // <meta name="description" content="...">
  description: '个人博客，记录生活', 

  markdown: {
    
    // 显示代码行号
    lineNumbers: true
  }
}

module.exports = config
```


## 博客首页

### 公共文件

创建 **docs/.vuepress/public** 用于存放公共文件

 **public/** , 存在了 **favicon.ico** 图标， 以及 **logo.jpg** 首页的头像图片
我在**public/** 下创建了**images** ，将**icon**和**logo**存放在此。

### 简单的首页编写

将 **docs/README.md**设置为首页， 修改代码为：

```md
---
home: true
heroImage: /logo.jpg
footer: MIT Licensed | Copyright © 2015-2018  Mr.De
---
```

### 设置网站 ico 图标

配置网站的 **ico** 图标， 修改 **.vuepress/config.js**：

```js{2,3,4}
const config = {
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ]
}
```


## 导航栏

### 配置导航栏

使用 **vuepress** 的默认主题配置导航栏 **.vuepress/config.js**：

```js{21}
const nav = [
  {
    text: 'Works',
    items: [
      { text: 'Vue', link: '/WEB/Vue/vuepress-blog' },
      { text: 'React', link: '/WEB/React/react-router' }
    ]
  }
]

const config = {
  themeConfig: {

    // 项目的 github 地址
    repo: '7wong/7wong',

    // github 地址的链接名
    repoLabel: 'GitGub',

    // 配置导航栏
    nav,
  },
}
```

### 创建有效的导航资源

为了使得导航栏的链接点击有效， 我们创建两个文件：

**docs/WEB/Vue/vuepress-blog.md**

```md
# 使用`vuepress`搭建静态博客

## vuepress初始化

## 基础配置

## 博客首页

## 导航栏
```


**docs/WEB/React/react-router.md**

```md
# react-router
```


## 侧边栏

### 侧边栏配置

使用 **vuepress** 的默认主题配置侧边栏 **.vuepress/config.js**：

```js{23,24,39}
const sidebar = {
  '/works/': [
    {
      title: 'Vue',
      children: [
        'Vue/vuepress-blog'
      ]
    },

    {
      title: 'React',
      children: [
        'React/react-router'
      ]
    }
  ]
}

const nav = [
  {
    text: 'works',
    items: [
      { text: 'Vue', link: '/works/' + sidebar['/Vue/'][0]['children'][0] },
      { text: 'other', link: '/works/' + sidebar['/other/'][1]['children'][0] }
    ]
  }
]

var config = {
  themeConfig: {

    // 当前 markdown 的 github 代码链接
    editLinks: true,

    // 链接显示的文本
    editLinkText: '查看原文|编辑此页',

    nav,
    sidebar,
  },
}
```

### 侧边栏效果

访问： **http://localhost:8080/**， 可以看到侧边栏已经生成


## 将静态博客网站部署到外网

使用 **gh-pages** 进行项目部署

```sh
npm run deploy
```

过几分钟后，访问 **https://7wong.github.io**， 便可以看到在外网成功部署的静态博客


## 评论功能

我们使用 **valine** 来实现评论功能：

> Valine - 一款快速、简洁且高效的无后端评论系统。

**点击进入 [Valine官网](https://valine.js.org/quickstart.html "Valine") ，需要先注册才能食用**


### 安装 Valine

```sh
# Install leancloud's js-sdk
npm install leancloud-storage --save

# Install valine
npm install valine --save
```

### 注册 vuepress 全局组件

创建 **.vuepress/components/Valine.vue**

```html
<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
  name: 'Valine',
  mounted: function(){
    // require window 
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
      
    }
     
    new Valine({
      el: '#vcomments' ,
      appId: '',// your appId
      appKey: '', // your appKey
      notify:false, 
      verify:false, 
      avatar:'mm', 
      placeholder: 'just go go' 
    });
  },
}
</script>
```

### 使用 Valine

只需要在 **markdown** 中调用即可

```md
<Valine></Valine>
```




## 自动部署
没有使用**travis-ci**，原因如下：托管到**gh-pages**，**GitHub**屏蔽**baidu爬虫**，且国内速度不佳。
最后采用**netlify**部署
**详见[netlify官网](https://www.netlify.com/ "netlify")**


<Valine></Valine>
<Valine></Valine>
