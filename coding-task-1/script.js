"use strict";

const app = Vue.createApp({
  data() {
    return {
      userName: "John Doe",
      currentTime: function () {
        const date = new Date();
        return `${date.toLocaleDateString()}, ${date.toLocaleTimeString(
          "en-US"
        )}`;
      },
    };
  },
});

app.mount("#app");
