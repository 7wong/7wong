#!/usr/bin/env sh

# 终止一个错误
set -e

# 构建
npm run build

# 进入生成的构建文件夹
cd docs/.vuepress/dist

# 如果你是要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'


git config --local user.name "{7wong}"
git config --local user.email {wangyude77@gmail.com}


# 如果你想要部署到 https://<USERNAME>.github.io
# git push -f https://github.com/7wong/7wong.github.io.git  master:master
# 如果使用 travis 持续集成
git push -f https://${7b11b1eb70175c8ddb7df957306da568b051b8ca}@github.com/7wong/7wong.git master:master

cd -
