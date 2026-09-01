# 什麼是 useRoute()？

`useRoute()` 是 Vue Router 提供的一個 Composition API 的函式（Composable）。它讓你可以存取當前頁面的路由物件（route object），這個物件包含了該路由的相關資訊，例如：現在的路徑（path）、動態路由參數（params）、查詢參數（query）...等。

```js
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div>
    <p>目前的路徑：{{ route.path }}</p>
    <p>語言：{{ route.query.lang }}</p>
  </div>
</template>
```

## $route 和 useRoute 比較
在 options api 時，可以直接使用 this.$route 來取得路由物件，但在 composition api setup 中並不能使用 this，需改用 useRoute 的寫法，且要額外 import。但兩種方式取得的內容是一樣的。