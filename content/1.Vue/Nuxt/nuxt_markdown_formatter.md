# [ Nuxt ] 不讓 prettier 改變 nuxt markdown 格式
## 問題
prettier formatter 會改變 nuxt markdown 的格式，讓格式跑掉

## 解法
爬文爬到這篇 https://github.com/nuxt/content/issues/1709，根據文章我新增了 .prettierignore 檔案，並加入 *.md，問題成功解決~