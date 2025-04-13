# JavaScript | proxy 是什麼
在 JavaScript 中，「代理（proxy）」是一個物件，它讓你可以攔截並自訂對另一個物件（稱為目標物件）的相關操作，例如，訪問屬性、賦值、枚舉、函式調用...等。這讓開發者能夠在物件上添加額外的邏輯，或者修改默認行為。
![alt text](/images/proxy.png)
Proxy 可以理解成，在目標對象之前架設一層「攔截」，外界對該對象的訪問，都必須先通過這層攔截，因此提供了一種機制，可以對外界的訪問進行過濾和改寫。 Proxy 這個字的原意是代理，用在這裡表示由它來「代理」某些操作，可以譯為「代理」。

---
chatgpt：
想像你有一個魔法玩具箱(目標物件)。當你向箱子要玩具時，一個魔法幫手(proxy)會聽到並把玩具給你，但他們也可以做一些特別的事情，比如在給你玩具之前說些有趣的話。這個魔法幫手還可以在把玩具放回箱子之前檢查玩具是否壞了。

在 JavaScript 中，代理就像那個魔法幫手。代理會監視你的目標物件(玩具箱)，並且可以控制當你試圖獲取或設定屬性時會發生什麼（就像拿出或放入玩具一樣）。

這裡有一個簡單的例子。想像你有一個裝著名為「Alice」的玩具的箱子。

```js
const toyBox = {
  toy: "Alice"
};

const handler = {
  get: function(target, property) {
    if (property === 'toy') {
      console.log("Getting the toy");
      return target[property];
    }
    return target[property];
  },
  set: function(target, property, value) {
    if (property === 'toy') {
      console.log("Setting the toy to " + value);
      target[property] = value;
      return true;
    }
    target[property] = value;
    return true;
  }
};

const proxyBox = new Proxy(toyBox, handler);

console.log(proxyBox.toy); // Getting the toy, Alice
proxyBox.toy = "Bob"; // Setting the toy to Bob
console.log(proxyBox.toy); // Getting the toy, Bob
```
當你要玩具時，代理（魔法幫手）說「拿到玩具」然後把玩具給你。

當你改變玩具時，代理說「把玩具設置為 Bob」然後改變玩具。

---
### 常見案例
驗證屬性的值
```js
const user = {
  name: "Alice",
  age: 25
};

const handler = {
  set: function(target, property, value) {
    if (property === 'age') {
      if (typeof value !== 'number' || value <= 0) {
        throw new Error("Age must be a positive number");
      }
    }
    target[property] = value;
    return true; // Indicate success
  }
};

const proxyUser = new Proxy(user, handler);

console.log(proxyUser.name); // Alice

// Setting a valid age
proxyUser.age = 30;
console.log(proxyUser.age); // 30

// Trying to set an invalid age
try {
  proxyUser.age = -5;
} catch (e) {
  console.log(e.message); // Age must be a positive number
}

// Trying to set another invalid age
try {
  proxyUser.age = "young";
} catch (e) {
  console.log(e.message); // Age must be a positive number
}

// Setting the name property (no validation on name)
proxyUser.name = "Bob";
console.log(proxyUser.name); // Bob
```

#### 參考資料
* [JavaScript Proxy 代理物件基礎 - Front End 網頁前端工程教學 - YouTube](https://www.youtube.com/watch?v=cSXPB6GDKdQ){target="_blank"}
* \[[Js] 簡單說明 Proxy - IT僧](https://it-monk.com/js-%E7%B0%A1%E5%96%AE%E8%AA%AA%E6%98%8E-proxy/){target="_blank"}
* [Proxy - ECMAScript 6入門](https://es6.ruanyifeng.com/#docs/proxy){target="_blank"}
* [Proxy Pattern | JavaScript Patterns](https://javascriptpatterns.vercel.app/patterns/design-patterns/proxy-pattern){target="_blank"}