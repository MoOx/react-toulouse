#!/usr/bin/env bash
GIT_DEPLOY_REPO=${GIT_DEPLOY_REPO:-$(node -e 'process.stdout.write(require("./package.json").repository.replace("https://github.com/","git@github.com:"))')}
echo $GIT_DEPLOY_REPO

# cd dist && \
# $(npm bin)/rimraf .git
# git init && \
# git add . && \
# git commit -m "Deploy to GitHub Pages" && \
# git push --force "${GIT_DEPLOY_REPO}" master:gh-pages
