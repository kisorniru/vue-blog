<template>
  <div>
    <!-- At last use the component here -->
    <!-- <add-blog></add-blog> -->
    <show-blogs></show-blogs>
  </div>
</template>

<script>
// Improt Coponent files frst 
import addBlog from './components/addBlog';
import showBlogs from './components/showBlogs';

export default {
  // Secondly Register Coponent files here
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
