import Vue from 'vue'
import App from './App.vue'
// For HTTP request/response we are using vue-resource plugin
// Firstly we run command for vue-resource : npm install vue-resource
//  Secondly we are importing this into main.js file, so that we can access it from anywhere from our project
import VueResource from 'vue-resource'

// Thirdly we are telling vue.js that we want to use vue-resource
Vue.use(VueResource);

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
  render: h => h(App)
})
