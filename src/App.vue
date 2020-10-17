<template>
  <div>
    <!-- At last use the component here -->
    <!-- <add-blog></add-blog> -->
    <!-- <show-blogs></show-blogs> -->
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
// Improt Coponent files frst 
import addBlog from './components/addBlog';
import showBlogs from './components/showBlogs';
import header from './components/header';

export default {
  // Secondly Register Coponent files here
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'app-header': header
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;
    color: #444;
}
</style>
