# JavaScript | var、let 與 const 的差異
> 主要參考：<a href="https://vocus.cc/article/61e64209fd8978000115de66" target="_blank">【自學程式】var、let 與 const 到底差在哪？</a>

## var 可以被重複宣告，但是 let、const 不行
var 可以重複宣告，不會報錯，缺點是不好維護管理，容易取到錯誤的值，忘記或不知道同樣的變數已經在其他地方使用過，導致程式碼結果不如預期。所以 ES6 之後，新增了 let、const 關鍵字，重複宣告變數會報錯

```js
var price = 30;
var price = 40;

let money = 30;
let money = 40;
// Uncaught SyntaxError: Identifier 'money' has already been declared

const wallet = 30;
const wallet = 40;
// Uncaught SyntaxError: Identifier 'wallet' has already been declared

```

## var、let 可以重新賦值，const 不行
不希望、不行被修改的值使用 const 來宣告。使用 const 宣告的變數被重新賦值時，會報錯 `Uncaught TypeError: Assignment to constant variable`。


## 變數作用域差異：var 是函式作用域，let、const 是區塊作用域
var 為全域和函式作用域，優先查找函式內有沒有該變數，再往外層/全域查找。

```js
var a = '全域變數';

function showVariable() {
  var a = '區域變數';
  console.log(a);
}

showVariable(); // 區域變數
console.log(a); // 全域變數
```

在 `{}` (非函式) 內用 var 宣告變數，無法將變數限制在該範圍內，會汙染全域。

```js
var a = '全域變數';

{
  var a = '區域變數';
  console.log(a); // 區域變數
}

console.log(a); // 區域變數
```

let、const 為全域和區塊作用域。在函式或區塊內都可以將變數限制在該層範圍中。
```js
let a = '全域變數';

function showVariable() {
    let a = '區域變數';
    console.log(a);
}

showVariable(); // 區域變數
console.log(a); // 全域變數
```
```js
let a = '全域變數';

{
  let a = '區域變數';
  console.log(a); // 區域變數
}

console.log(a); // 全域變數
console.log(window.a); // undefined
```

## 三個都會 hoisting，但只有 var 會初始化為 undefined，let、const 不會初始化，而是處於 暫時性死區 TDZ 直到變數被宣告

### var 會初始化
```js
console.log(greeting); // undefined
var greeting = "hi there";
```

### let const 在 宣告前，都會是 暫時性死區 (TDZ，Temporal Dead Zone)，在宣告前使用會報錯 is not defined
```js
console.log(greeting); 
// Uncaught ReferenceError: greeting is not defined
let greeting = "hi there";
```

## 變數是否強制在宣告時指定值var、let 可以不用先指定值，const 宣告時一定要指定值
因為 const 不能重新賦值，沒賦值會報錯 `Uncaught SyntaxError: Missing initializer in const declaration`。

#### 參考資料
* <a href="https://vocus.cc/article/61e64209fd8978000115de66" target="_blank">【自學程式】var、let 與 const 到底差在哪？</a>
* <a href="https://vocus.cc/article/61e64209fd8978000115de66" target="_blank">在 JavaScript 中用 var, let, 以及 const 有什麼差別？什麼時候該用哪個？| Explain this</a>