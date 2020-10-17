<template>
  <div>
    <!-- At last use the component here -->
    <add-blog></add-blog>
  </div>
</template>

<script>
// Improt Coponent files frst 
import addBlog from './components/addBlog';

export default {
  // Secondly Register Coponent files here
  components: {
    'add-blog': addBlog,
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
