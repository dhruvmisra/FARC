import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.filter('dr', (name) => {
  return 'Dr. ' + name;
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
