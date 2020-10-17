<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" >
    <div class="single-blog" v-for="(blog, index) in filteredBlogs" :key="index">
        <router-link v-bind:to="'/blog/'+blog.id"><h2 v-rainbow>{{ blog.title | to-uppercase }}</h2></router-link>
        <!-- <article>{{ blog.body | snippet }}</article> -->
        <article>{{ blog.content | snippet }}</article>
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
        // This one is with face database
        // this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
        //     this.blogs = data.body.slice(0, 10);
        // });
        // This one is with firebase realtime database
        this.$http.get('https://blog-22854.firebaseio.com/posts.json').then(function(data){
            // console.log(data.json());
            return data.json();
        }).then(function(data){
            // console.log(data);
            var blogsArray = [];
            for (let key in data) {
                // console.log(data[key]);
                data[key].id = key;
                blogsArray.push(data[key]);
            }
            // console.log(blogsArray);
            this.blogs = blogsArray;
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

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border: 1px dotted #aaa;
}
#show-blogs a{
    color: #444;
    text-decoration: none;
}
input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}
</style>