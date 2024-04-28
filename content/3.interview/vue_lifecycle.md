# Vue | Vue 生命週期

既然叫做「生命」週期，就跟人的一生有經歷生老病死一樣，Vue 元件也會經歷好幾個階段：建立、掛載、更新，到卸載(銷毀)。Vue 在各個階段都提供了前後兩個 function，Vue 實體建立前後就是 beforeCreate 和 created、初始渲染和插入 DOM 節點前後則是 beforeMount 和 mounted...等，我們稱這些 function 為 hooks 鉤子，hooks 讓我們可以在不同時機點執行特定程式碼。


![alt text](./img/lifecycle.png)

![alt text](image.png)
