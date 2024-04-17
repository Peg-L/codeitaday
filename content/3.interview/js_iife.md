# \[ JavaScript ] 立即函式 IIFE 是什麼？優缺點有哪些？

## 立即函式 IIFE 介紹
立即(調用)函式 (後面都簡稱 IIFE，Immediately Invoked Function Expression) 是種在定義完**可以馬上執行的函式表達式**。函式表達式可以寫成匿名或具名，所以 IIFE 也具有相同特性。另外，也可以寫成箭頭函式，寫起來更精簡，且運行是一樣的。

IIFE 跟原本呼叫函式的寫法很像，一般呼叫函式：`add()`，只是變成把 add 的內容直接寫出來用括號包住，`(函式內容)()`，既然都已經呼叫它了，它當然就會 (立即) 執行囉。

### 範例
匿名函式 / 具名函式 / 箭頭函式
```js
(function () {
	console.log('匿名 立即函式');
})();

(function namedIIFE() {
    console.log('具名 立即函式');
})();

(() => {
    console.log('箭頭 立即函式');
})();

console.log(typeof namedIIFE); // "undefined"
```

把 IIFE 賦予給變數只會儲存它的結果，而不是 function 本身。
```js
var result = (function () {
  var name = "Barry";
  return name;
})();

result; // "Barry"
```

## 為什麼要用 IIFE？IIFE 有什麼優點?
* 作用域封裝：創建一個獨立的作用域，用來避免變數命名衝突並確保變數不會洩漏汙染全局作用域，在外層無法使用 IIFE 中宣告的變數。
* 立即執行：會馬上執行，這對於需要立即初始化的程式碼非常有用，不需要等待任何事件或條件。
* 模組化：將不同的功能分組，每個組有各自的變數和函式，在個別的獨立空間，不會互相影響，分開來也方便維護和管理。


## IIFE 有什麼缺點?
* 閱讀和理解相較困難。
* debug 較困難，錯誤訊息可能沒辦法準確定位哪段程式碼出錯，尤其當你立即函式塞了一堆內容時會更難處理。


#### 資料來源
* <a href="https://www.explainthis.io/zh-hant/swe/what-is-iife" target="_blank">JavaScript 立即調用函式 IIFE (Immediately Invoked Function Expression) 是什麼？優缺點是什麼？</a>
* <a href="https://developer.mozilla.org/zh-TW/docs/Glossary/IIFE" target="_blank">IIFE</a>