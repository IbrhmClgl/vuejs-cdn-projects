# Task: Light Switch App with Vue

In this task we use the v-on directive to create a vue version of our light switch app from the web apps foundation module.

## Fulfill the following tasks:

- Try to refactor your existing (plain js and html) light switch with VueJS.
  - If you didn't solve that issue before start from scratch!

## Hint

You can access elements, that are outsite of the VueJS mounted container (like the document title or body) with regular JS.

```
Vue.createApp({
data() {
return {
text: "Hello Title",
onClassName: "is-active",
};
},
methods: {
active() {
document.title = this.text;
document.body.classList.add(this.onClassName);
},
},
}).mount("#app");
```
