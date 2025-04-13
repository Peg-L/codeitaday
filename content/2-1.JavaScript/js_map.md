# Map 物件

ES6 `Map` 物件可以用來保存和操作鍵值對 (key-value pairs)。透過 `new Map()` 來創建。

```javascript
new Map([iterable])
```

```javascript
// 一次賦予多個鍵值對
let mapMult = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
]);
console.log(mapMult);
// 回傳結果：Map(3) { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }
```

```javascript
// 個別賦予鍵值對
let mapSingle = new Map();

mapSingle.set('key1', 'value1');
mapSingle.set('key2', 'value2');
mapSingle.set('key3', 'value3');

console.log(mapSingle);
// 回傳結果：Map(3) { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }
```

跟我們一般常用的 Object 很像，但有一些差別：

- Map 會記錄放入的順序，Object 不會。
- Map 可以把任何值 (物件及基本型別) 作為鍵和值，Obejct 的鍵 (key) 只可以是字串。
- Map 提供許多常用的屬性和方法，Object 沒有提供。
   - Map.size: 很容易取得 Map 大小
   - has()
   - set()
   - get()
   - delete()
- Map 可直接使用 for… of / forEach 迭代，Object 需要先轉換成陣列，例如透過 Object.keys
   ```javascript
   const sales = new Map([
     ['Books', 150],
     ['Games', 90],
     ['Software', 120]
   ]);
   
   let totalSales = 0;
   // value 和 key 都可以取到，也可以只取 value
   sales.forEach((value, key) => {
     console.log(key);
     totalSales += value;
   });
   console.log('Total Sales:', totalSales);
   ```

   ```javascript
   const temperatures = new Map([
     ['Monday', 20],
     ['Tuesday', 22],
     ['Wednesday', 18]
   ]);
   
   const celsiusToFahrenheit = temp => (temp * 9/5) + 32;
   
   for (let [day, temp] of temperatures) {
     temperatures.set(day, celsiusToFahrenheit(temp));
   }
   console.log(Array.from(temperatures));
   ```

#### 參考資料
- [在 JavaScript 中，Map 與 object 的差別？為什麼有 object 還需要 Map？｜ExplainThis](https://www.explainthis.io/zh-hant/swe/map-vs-object#map-2)

- [Map - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

- chatgpt