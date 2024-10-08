import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";

Vue.use(ElementUI);

Vue.config.productionTip = false;

export default new Vue({
  el: "#app",
  render: (h) => h(App),
});
