# Vue | Vue Component 之間如何傳遞資料
「Props in, Event out」，父傳子(外傳內) 透過 props，子傳父(內傳外) 使用 emit

## props
prop 是 property 的縮寫，也就是說它是以屬性的形式來傳遞值。props 分為靜態傳入和動態傳入，我們一般最常用 v-bind 動態地將父層的 data 傳入子元件，子元件再用 props 來接收資料。寫法可以記口訣「**前內後外**」，例如：`:img="imgUrl"`，img 就是子元件 props 名，imgUrl 則是父層的 data 名。

注意：因為 html 不分大小寫，屬性名要改成烤肉串寫法，例如：原本寫小駝峰 `imgUrl`，要改為 `img-url`。

```html
<vue-header :img="imgUrl"></vue-header>
```

```js
<script type="module">
const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      imgUrl:
        'https://images.unsplash.com/photo-1705599773422-c1066356f801?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    };
  }
});

app.component('vue-header', {
  // 子元件 props 接收
  props: ['img'],
  data() {
    return {
      header: 'header 元件',
    };
  },
  template: '#vue-header',
});

app.mount('#app');
</script>
```

## emit
emit 用於子元件向父層發送消息。

在細講 emit 之前，先來複習一下 v-on (@)。這是一個常見的 click 事件監聽 `@click="add"`，當我們監聽到這個元素被點擊後，就會執行 add 方法。其實 emit 也是相同概念，當監聽子元件 emit 事件有變化，就執行父層的方法。

以下面程式碼為例，子元件透過 `this.$emit('emit-text', this.text);` 方法**發射**一個事件，通知父層某些事件發生（如用戶的互動或數據更新）。在子元件標籤寫的 v-on 事件監聽 `@emit-text="getData"` 監聽到對應事件，就會執行父層的方法 `getData`。

> 一分鐘英文教室： emit 有發送、發射的意思
---

`this.$emit('emit-text', this.text);`<br/>
前面放事件名 ('emit-text')，後面放參數 (this.text)，參數會被傳入父層的方法，且參數不一定要寫。

注意：emit 跟 props 一樣，因為 html 不分大小寫，監聽的事件名也要改成烤肉串寫法。

```html
<button-text @emit-text="getData"></button-text>
```

```js
<script type="module">
  const app = Vue.createApp({
    data() {
      return {
        text: '',
      };
    },
    methods: {
      getData(text) {
        console.log('getData');
        this.text = text;
      },
    },
  });

  app.component('button-text', {
    data() {
      return {
        text: '內部資料',
      };
    },
    methods: {
      emit() {
        console.log('emit-text');
        this.$emit('emit-text', this.text);
      },
    },
    template: `<button type="button" @click="emit">emit data</button>`,
  });

  app.mount('#app');
</script>
```

![alt text](/images/vue_pass_data_example_code.png)



#### 參考資料
* [2-2 元件之間的溝通傳遞](https://book.vue.tw/CH2/2-2-communications.html){target="_blank"}