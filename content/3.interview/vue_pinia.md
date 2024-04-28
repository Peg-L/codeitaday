# \[ Vue ] 你是寫 VueX 還是 pinia？你最近的專案用它做了哪些事？
最近寫的 Vue 專題 Dr.Meme 個人網站是用了 Pinia 這個狀態管理庫。當有些方法或是資料狀態需要在不同元件或頁面重複利用，或是想要保持資料一致性，就可以透過 pinia 統一管理。所以在這個網站中，我建立了 cartStore，把 carts、getCarts 和 addToCart 等資料方法放在 store 中，最喜歡的例子是 navbar 購物車顯示數量，不管在網頁哪裡將商品加入購物車，顯示數量都會因此同步更新，非常方法，還有就是需要修改方法的邏輯，會很清楚知道要去哪裡改。


#### 參考資料
* [Why Pinia](https://pinia.vuejs.org/introduction.html#Why-Pinia){target="_blank"}