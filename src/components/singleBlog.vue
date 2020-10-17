<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <!-- <article>{{ blog.body }}</article> -->
        <article>{{ blog.content }}</article>
        <p>Author: {{ blog.author }}</p>
        <ul>
            <li v-for="(category, index) in blog.categories" :key="index">{{ category }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {
        // this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
        //     this.blog = data.body;
        // });
        this.$http.get('https://blog-22854.firebaseio.com/posts/' + this.id + '.json').then(function(data){
            return data.json();
        }).then(function(data){
            this.blog = data;
        });
    }
}
</script>

<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
}
</style>