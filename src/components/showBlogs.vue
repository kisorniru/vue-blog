<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" >
    <div class="single-blog" v-for="(blog, index) in filteredBlogs" :key="index">
        <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
        <article>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
    data () {
        return {
            blogs: [],
            search: '',
        }
    },
    methods: {
        //
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(0, 10);
        });
    },
    computed: {
        // Apart from this we are using mixin. Because this search filters will be used by another Or multiple component 
        /*
        filteredBlogs: function(){
            return this.blogs.filter((blog) => {
                return blog.title.match( this.search );
            });
        }
        */
    },
    // Custom Filter Locally
    filters: {
        'snippet': function(value) {
            return value.slice(0, 100) + ' ...';
        }
    },
    // Directives Filter Locally
    directives: {
        'rainbow': {
            bind(el, binding, vnode) {
                el.style.color = '#' + Math.random().toString().slice(2, 8);
            },
        }
    },
    mixins: [searchMixin]
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
