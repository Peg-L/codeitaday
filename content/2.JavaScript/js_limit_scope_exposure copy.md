# JavaScript | Class
## Class 是什麼
類別 (class) 是在 ES6 中引入，用來作為建立**新物件的模板**。它可以將程式碼封裝起來。

為什麼要創建模板? 以 Notion 舉例，假如你每天都要寫行程表+感恩日記，每個頁面都要有代辦清單、行事曆和感恩的三個問題，每次寫每次都要把全部內容重新輸入一次，非常的浪費時間。這時候就可以創建模板，先設計好必要的架構，每天只需要填入內容就 ok 囉。

class 是一種幫助我們建立物件模板的語法糖，我們就可以【避免重複】書寫相同的程式碼來節省時間。在 class 中我們會建立好物件的屬性和它可以執行的函式。

開頭用 class 來宣告，名稱用大寫開頭，後面接 `{ }`，基本屬性架構用 constructor 函式傳入參數並賦予值，後面加上所需的函式，可以傳入參數也可以回傳值 (就是一般的函式)，往下看範例程式碼會更清楚。

```js showLineNumbers
class Classname​ {
	constructor(參數1, 參數2) {
		this.屬性名​1 = 參數1,
		this.​屬姓名2 = 參數2,​
	}
	
	函式1 () {
		// 取用屬性 this.屬姓名
		console.log(this.屬姓名1)​
	}
	
	函式2 (參數a) {
		// 可以 傳入參數
		// 可以 回傳值
		return this.參數1 * 參數a
	}​
}

const objName = new Classname(傳入值1, 傳入值2);

const total = objName.函式2(5)
```

## Class 範例程式碼
### 原寫法
```js
const product1 = {
	name: '上衣',
	price: 599,
	displayProduct: function() {
		console.log(this.name);
		console.log(this.price);
	},
	calculateTotal: function(amount) {
		return this.price * amount
	}	
}

const product2 = {
	name: '上衣',
	price: 599,
	displayProduct: function() {
		console.log(this.name);
		console.log(this.price);
	},
	calculateTotal: function(amount) {
		return this.price * amount
	}	
}
```

### class 寫法
```js
class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
	
	displayProduct() {
		console.log(this.name);
		console.log(this.price);
	}
	
	calculateTotal(amount) {
		return this.price * amount
	}
}

const product1 = new Product("上衣", 599);
const product2 = new Product("外套", 1300);

const total = product1.calculateTotal(5); // 有回傳值，可存入​變數中
```

### 其他範例
* [JavaScript Classes #1: The Basics - JavaScript OOP Tutorial](https://youtu.be/wik23D_gyCo?si=5c5C9DHFK-Sz7HJb){target="_blank"}
* [【javascript】class 介紹](https://www.youtube.com/watch?v=TQYM2yED-l0){target="_blank"}


#### 參考資料
* [MDN - class](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes){target="_blank"}
