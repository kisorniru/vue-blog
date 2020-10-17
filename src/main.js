import Vue from 'vue'
import App from './App.vue'
// For HTTP request/response we are using vue-resource plugin
// Firstly we run command for vue-resource : npm install vue-resource
//  Secondly we are importing this into main.js file, so that we can access it from anywhere from our project
import VueResource from 'vue-resource'

// For router we are using vue-router plugin
// Firstly we runcommand for vue-router : npm install vue-router --save
//  Secondly we are importing this into main.js file, so that we can access it from anywhere from our project
import VueRouter from 'vue-router'

// For router we are using vue-router plugin
// Firstly we runcommand for vue-router : npm install vue-router --save
//  Secondly we are importing this into main.js file, so that we can access it from anywhere from our project
import Routers from './routes/routes'

// Thirdly we are telling vue.js that we want to use vue-resource
Vue.use(VueResource);

// Thirdly we are telling vue.js that we want to use vue-rouer
Vue.use(VueRouter);

// Finally we are setting up this for using
const router = new VueRouter({
  routes: Routers,
  mode: 'history'   /* this 'history' mode remove # from url and this is only for development. Vue.js by default mode is #/hash */
});

// Custom Directives
Vue.directive('rainbow', {
  // here el = <h2 v-rainbow>{{ blog.title }}</h2>
  // binding = v-rainbow value
  // argument = v-rainbow: value
  bind(el, binding, vnode) {
    el.style.color = '#' + Math.random().toString().slice(2, 8);
  }
});

// Custom Directives
Vue.directive('theme', {
  // here el = <div v-theme="" id="show-blogs"> ... ... </div>
  // binding = v-theme value i.e wide / narrow etc.
  // argument = v-rainbow:column, here column is an argument value
  bind(el, binding, vnode) {

    if (binding.value == 'wide') {
      el.style.maxWidth = "1000px";
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = "560px";
    }
    if (binding.arg == "column") {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }

  }
});

// Custom Filter Globally
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
