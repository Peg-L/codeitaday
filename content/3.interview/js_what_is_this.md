# JavaScript | what is "this"？

* this 是存在函式作用域裡面的 → 每個函式的 this 都可能不同
* 純粹的呼叫，this 會指向全域，例如: `callSomeone()`
* 當函式是做為一個物件的方法來調用時，this 會指向這個物件
* this 與如何定義無關，只與呼叫方式有關
* 箭頭函式沒有自己的 this，就會往外層找，如果沒有被函式包住，就會指向全域

```js
const nightMarket = {
    marketName: '六角夜市',
    foods: ['珍珠奶茶', '大腸包小腸', '雞排'],
    logFoods() {
        this.foods.forEach((food) => {
            console.log(`${food} 是 ${this.marketName} 的特色美食`);
        });
    }
};

nightMarket.logFoods();
// 輸出:
// 珍珠奶茶 是 六角夜市 的特色美食
// 大腸包小腸 是 六角夜市 的特色美食
// 雞排 是 六角夜市 的特色美食
```

#### 參考資料
* [解釋 JavaScript 中 this 的值?](https://www.explainthis.io/zh-hant/swe/what-is-this){target="_blank"}
* 六角學院影片
* chatgpt