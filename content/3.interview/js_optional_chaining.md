# \[ JavaScript ] 可選串連 ?.
## 什麼是 可選串連 ?.
可選串聯（Optional chaining (?.)）運算符用於訪問 object 的屬性或調用函數。如果使用該運算符訪問的object 或調用的函式為 undefined 或 null，則表達式會回傳 undefined，而不是拋出錯誤。
```js
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// undefined

console.log(adventurer.someNonExistentMethod?.());
// undefined
```
## 可選串連 ?. 的使用時機
JS 是同步語言，逐行執行，報錯時會中斷程式碼，利用可選串連不報錯而是回傳 undefined 的特性來避免中斷，尤其是從遠端取資料，比較難預期會拿到什麼值的情況下，可以適當運用，但不要全部都加 ?.。

#### 參考資料
* <a href="https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Optional_chaining" target="_blank">MDN - 可選串連</a>