# JavaScript | call、apply、bind 的差異
call、apply、bind 三者都是 JavaScript Function 的內建函式。

```js
const userInfo = {
  userName: 'Peggy',
  job: 'frontend developer',
};

function info() {
  console.log(`My name is ${this.userName}, I'm a ${this.job}.`);
}

function greet(personA, personB) {
  console.log(`Hi, ${personA} and ${personB}. My name is ${this.userName}.`);
}

info();
// My name is undefined, I'm a undefined.
```

## call
* call 的第一個參數放我們指定的物件
* call 第二個(含)以後的參數會作為目標函式的參數傳入，如果目標函式不需要參數則可以不傳入
* 使用 call 會直接執行方法

### call 範例一 (無參數)
```js
info.call(userInfo);
// My name is Peggy, I'm a frontend developer.
```

### call 範例二 (有參數)
```js
greet.call(userInfo, 'Harry', 'Voldemort');
// Hi, Harry and Voldemort. My name is Peggy.
```

## apply
* apply 的第一個參數放指定目標函式中的 this
* 
* 使用 call 會直接執行方法


#### 參考資料
* [JavaScript - call，apply，bind - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10195896){target="_blank"}