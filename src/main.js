import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import {request} from "./network/request";
import url from "./network/url";
import 'vant/lib/index.css';
import { Toast } from 'vant';
Vue.use(Toast)
Vue.prototype.request = request
Vue.prototype.url = url

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
