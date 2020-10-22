import Vue from 'vue';
import App from './App.vue';
import VueResouce from 'vue-resource';
import VueRouter from 'vue-router';

import { routes } from './routes'

Vue.use(VueRouter);
Vue.use(VueResouce);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
