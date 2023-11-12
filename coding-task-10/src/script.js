const app = Vue.createApp({
  data() {
    return {
      darkmode: false,
    };
  },
  methods: {
    toggle() {
      this.darkmode = !this.darkmode;
    },
  },
}).mount("#app");
