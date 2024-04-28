# Leetcode | 2665. Counter II
## 題目
Write a function `createCounter`. It should accept an initial integer `init`. It should return an object with three functions.
編寫函式 createCounter。它應該接受初始整數 init。返回一個具有三個函式的物件。

The three functions are: 這三個函式分別為：

* `increment()` increases the current value by 1 and then returns it.
`increment()` 將當前值增加 1，然後返回它。
* `decrement()` reduces the current value by 1 and then returns it.
`decrement()` 將當前值減小 1，然後返回它。
* `reset()` sets the current value to init and then returns it.
`reset()` 將當前值設置為 init，然後返回它。


Example 1:
```js
Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
```

Example 2:
```js
Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
Output: [1,2,1,0,0]
Explanation:
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0
```

Constraints: 限制：

* `-1000 <= init <= 1000`
* `0 <= calls.length <= 1000`
* `calls[i] is one of "increment", "decrement" and "reset"`


## 解法參考
```js
var createCounter = function(init) {
	let currentValue = init;
  return {
  	increment: () => currentValue+=1,
   	decrement: () => currentValue-=1,
   	reset: () => currentValue = init,
  }
};
```
```js
var createCounter = function(init) {
	let currentValue = init;
  return {
  	increment: () => ++currentValue,
   	decrement: () => --currentValue,
   	reset: () => currentValue = init,
  }
};
```

不能寫 `currentValue++` / `currentValue--`，因為會先回傳 currentValue，才進行 ++ / --。

或改寫成 進行 currentValue++ 後，再 return
```js
var createCounter = function(init) {
	let currentValue = init;
  return {
  	increment: () => {
        currentValue++
        return currentValue;
    },
   	decrement: () => {
        currentValue--;
        return currentValue;
    },
   	reset: () => currentValue = init,
  }
};
```

#### 題目來源
* <a href="https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript" target="_blank">leetcode 2665. Counter II</a>