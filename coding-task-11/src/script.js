const API_URL = "https://dummy-apis.netlify.app/api/color";

const app = Vue.createApp({
  data() {
    return {
      randomBgColor: "#000000",
    };
  },
  methods: {
    loadColorData() {
      fetch(API_URL)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.randomBgColor = data.color;
        });
    },
  },
});
app.mount("#app");
