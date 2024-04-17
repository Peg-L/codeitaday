# \[ JavaScript ] 有哪些資料型別? 怎麼辨別變數的資料型別?

JS 資料型別分為兩大類，原始型別 (Primitive values) 和物件型別 (Objects)。

## 原始型別 (Primitive values) 
### 1. String
用於表示文本。在 JavaScript (簡稱 JS) 中，字串可以用單引號、雙引號或反引號表示。例如：`'hello'`、`"world"`、``hello world``。

### 2. Number
數值如：整數、浮點數、Infinity、-Infinity 和 NaN (Not a Number)。精確度是介於 `-(2^53 - 1)` 與 `2^53 - 1` 之間。


### 3. BigInt
安全整數範圍是 `-(2^53 - 1)` 與 `2^53 - 1` 之間，任何超出此範圍的數值都不能保證精度。`BigInt` 的引入主要就是為了解決在處理非常大或非常小的數值時可能遇到的精度問題。

可以通過在整數後面加上 `n` 來創建一個 `BigInt` 數值，例如：`1234567890123456789012345678901234567890n`，或者使用 BigInt 函式，例如 `BigInt("1234567890123456789012345678901234567890")`。

### 4. Boolean
`true` 和 `false`。

### 5. Undefined
當變數已經被宣告但還沒被賦值時，值為 `undefined`。
```js
let a ;

console.log(a); // undefined
```

用 const 宣告沒賦予值，直接報錯
```js
const a;

console.log(a); 
// 直接報錯 Uncaught SyntaxError: Missing initializer in const declaration​
```

### 6. Null
表示 「没有值」、「空值」。要特別注意的是，null 是原始型別，但 `typeof null` 會回傳 「object」，其實這是一個設計錯誤，但由於當時已經有了大量依賴於這一行為的程式碼，為了保持向後兼容，這個 bug 就被保留下來惹。

如果要判斷變數是否為 null，可以改用 `=== null`，而不是 `typeof`。


### 7. Symbol
它提供了一種獨特 (唯一) 且不可變的值，通常用作物件屬性的 key。由於每個 Symbol 值都是獨一無二的，這使得 Symbol 在作為 key 時，不會與其他屬性名產生衝突。


每個使用 Symbol() 函式創建的 Symbol 都是獨一無二的，即使用相同的參數調用 `Symbol()` 函式，創建的 Symbol 也不相等。
```js
let a = Symbol(1);
let b = Symbol(1);

console.log(a === b); // false
```

---

## 物件型別 (Objects)
上面原始型別那 7 個以外的，都是物件型別。物件、陣列、函式都是物件型別。物件型別的特性是它們可以被加上屬性，不只是物件可以加屬性，陣列和函式也都可以。
```js
const arr = [1, 2, 3, 4, 5];
arr.name = '我是陣列';
console.log(arr.name);
console.log(arr);
// 都可以正常運行​
```
```js
function fn() {
	console.log('函式');
}

fn.myName = '這是一個函式';
console.log(fn);
console.dir(fn); // 函式要用 console.dir 來觀察​
```

## 怎麼辨別變數的資料型別?
判斷法：typeof xxx 回傳什麼值。

殘念的是有兩個例外：null 和 function。typeof null 回傳 object 但它是原始型別；typeof function 照理說要回傳 object，可是它卻回傳 function...

![type](image-2.png)

## 原始型別包裹物件 primitive wrapper objects
原始型別總共有 7 個，例如：Number、String、Boolean 等，儘管這些原始型別並不是物件，但 JS 提供了它們各自對應的包裹對象（wrapper objects），讓我們可以讓原始型別執行類似物件的操作，例如：訪問屬性或方法。以字串來說，我們可以取得字串的長度。

這裡要特別注意的是，JS 會在背後偷偷幫我們轉換為對象，再轉回來，並不需要也不建議主動去創建包裹物件實例 `new String()`，創建新實例反而會導致類型判斷上的混淆 (它會回傳 object) 並增加不必要的計算開銷。

#### 資料來源
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures" target="_blank">JavaScript data types and data structures</a>
* chatgpt
* <a href="https://www.youtube.com/live/kX3madakVl0?si=4us1OI9UivKPi4v5" target="_blank">JavaScript 型別篇 - JS 面試常見核心知識</a>