import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

const config = {
  apiKey: "AIzaSyAvESRmx33-ttNjKikZ5-u0F4Edxy_U9MI",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://farc-2ec77.firebaseio.com/",
  storageBucket: "<BUCKET>.appspot.com",
}

Vue.filter('dr', (name) => {
  return 'Dr. ' + name;
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
