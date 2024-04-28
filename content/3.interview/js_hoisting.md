# JavaScript | 什麼是提升 ( hoisting )？

JavaScript (JS) 在運行時會分成兩個階段，1.「創建階段」和 2.「執行階段」。在創建階段，JS 會為所有變數和函式分配記憶體空間，就好像把變數和函式「宣告」**提升**到最前面，並不是真的會移動程式碼，接下來，執行階段才進行賦值。

## 變數
var 和 let、const 都會進行提升，但兩組人馬有些重要的差異點。

### var
var 會初始化得到 undefined 這個值，就算在程式宣告前就取用該變數，也不會報錯。
```js
console.log(a); // undefined
var a = 1;
console.log(a); // 1
```
### let、const
let、const 雖然也會提升，但他們不像 var 有初始值，在程式宣告前都是處在「暫時性死區」(TDZ，Temporal Dead Zone)，想要取用或是賦值就會報錯給你看。
```js
console.log(b); // Uncaught ReferenceError: b is not defined
const b = 2;
```

```js
c = 3; // Uncaught ReferenceError: Cannot access 'c' before initialization
let c;
```

```js
console.log(d); // Uncaught ReferenceError: d is not defined
const d = 5;
```

## 函式
函式宣告也會提升，所以在那宣告之前呼叫，也可以正常運行。但要小心，函式陳述式會提升，但函式表達式不會。另外，函式的提升優先於變數的提升。

### 函式陳述式會提升
```js
greeting();

function greeting() {
  console.log('哈囉 你好嗎');  // 哈囉你好嗎
}
```

### 函式表達式沒提升
```js
sayThanks(); // Uncaught TypeError: sayThanks is not a function

var sayThanks = function() {
  console.log('衷心感謝')
}
```

### 函式比變數優先提升
```js
console.log(foo); // ƒ foo() { }
var foo;
function foo() { };
```

#### 參考資料
* [什麼是提升 (Hoisting)？](https://www.explainthis.io/zh-hant/swe/hoisting#hoisting){target="_blank"}
* [我知道你懂 hoisting，可是你了解到多深？](https://blog.techbridge.cc/2018/11/10/javascript-hoisting/){target="_blank"}