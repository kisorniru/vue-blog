import Vue from 'vue'
import App from './App.vue'
// For HTTP request/response we are using vue-resource plugin
// Firstly we run command for vue-resource : npm install vue-resource
//  Secondly we are importing this into main.js file, so that we can access it from anywhere from our project
import VueResource from 'vue-resource'

// Thirdly we are telling vue.js that we want to use vue-resource
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
