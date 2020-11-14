import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import UUID from "vue-uuid";

Vue.config.productionTip = false;

Vue.use(UUID);

new Vue({
  render: (h) => h(App),
  vuetify,
}).$mount("#app");
