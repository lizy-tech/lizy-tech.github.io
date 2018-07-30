---
title: Hexo+github搭建个人博客
date: 2018-07-25 13:20:24
categories: 
- ceshi
- slslsl
tags: 
- test
- test22
---

## 主要步骤

```
1. 本地环境准备(主要包括node.js和git环境，gitHub账户的配置)
2. Hexo安装和配置
3. 补充
```
## 本地环境准备
```
win10+Node.js+git+github
```
- Node.js下载地址: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
- Git下载地址: [https://git-scm.com/](https://git-scm.com/)
- github注册地址：[https://github.com](https://github.com)
<!-- more -->

node.js安装完成之后可以通过 `node -v` 和 `npm -v` 两个命令验证是否安装成功

在github上注册一个以 ***github昵称.github.io*** 命名的仓库
  
注册完成之后，可以在**https://github昵称.github.io**中看到自己的博客了

## Hexo的安装和配置
在命令行窗口使用以下命令安装Hexo
```
npm install hexo-cli -g
```
#### 创建文件夹
```
hexo init foldername
cd foldername
npm install
```
- 测试本地建站是否成功

```
hexo s
INFO  Start processing
INFO  Hexo is running at http://localhost:4000/. Press Ctrl+C to stop.
出现上面两行，即表示本地建站成功
```

然后修改博客网站配置信息文件 _config.yml 
```
deploy:
  type: git
  repo: https://github.com/lizy-tech/lizy-tech.github.io.git
  branch: master
```

在生成以及部署文章之前，需要安装一个扩展：
```
npm install --save hexo-deployer-git
```
#### 发表一篇文章的步骤
1. hexo new "my new post"//新建一篇文章
2. 进入foldername/source/_posts目录下，打开my new post.md文件编辑文章
3. hexo g //完整命令为hexo generate,用于生成静态文件
4. hexo s //完整命令为hexo server,用于启动服务器，主要用来本地预览
5. hexo d //完整命令为hexo deploy,用于将本地文件发布到github等git仓库上


## 补充

该部分主要涉及博客的查找，分类，编辑，以及如何安装主题等
#### 生成文章命令
```
hexo new [layout] "article_name"
//这个layout 是可选的，它就是指 scaffold 模板目录下的模板文件名，如果指定layout名，hexo 将会根据 layout 给文章生成 front-matter，格式头，指定文章的标签，类别，名字等。
```
执行这个命令将会默认在source目录中的 _posts 中生成一个名为 article_name.md 的文章，注意_posts中的文章就是要发表的文章，如果你只是想作为草稿文章，可以在 source 目录新建一个_drafts 目录，并在 config.yml 站点配置文件中修改 default_layout 参数值为: draft，这样在执行上面的命令时候就会默认在 _drafts 目录下生成文章
#### 发表文章
```
hexo publish [layout] <article_name>
//如果有 _drafts 目录，就会自动将文章发表到 _posts 目录下
```
#### 生成站点文件
```
hexo generate
//可简写为 hexo g
会将 source 目录中除了 _ 开头的目录或文件生成到 public 文件夹下。
```
####  在博文中插入图片
```
//配置站点文件_config.yml
post_asset_folder: true 
//安装上传本地图片的插件 
npm install https://github.com/CodeFalling/hexo-asset-image -–save
执行hexo new post “xxxx” 
在/source/_posts文件夹内除了生成xxxx.md文件还会生成一个同名的文件夹，把图片复制到同名文件夹中，在博文中添加图片：
{% asset_img 图片名.png 图片说明文字 %}
或者 ![图片说明文字](文件夹名称/文件名.jpg)
```
可以进入public文件夹看生成的静态文件查看链接是否正确


#### 安装主题
下载主题到themes文件夹中，默认有一个landscape的主题
启用主题
```
theme: next //修改_config.yml文件中的主题配置
hexo clean //清除缓存文件db.json和已生成的静态文件public
hexo g
```
主题选择参考[https://www.zhihu.com/question/24422335](https://www.zhihu.com/question/24422335)

#### 添加分类、关于、标签等
使用以下命令
```
hexo new page "about" #关于
hexo new page tags   # 标签，在source目录下新生成tags文件夹，打开里面的index.md文件，添加type: "tag"
hexo new page categories #分类 在source目录下新生成categories文件夹，打开里面的index.md文件，添加type: "categories"
hexo new page archives  # 归档
```
然后进入主题的配置文件中（一定要是主题的配置文件中,_config.yml），在menu标签下将分类，标签和归档的注释删除即可。



