<template>
  <div id="add-blog">
    <h1>Add blog</h1>
    <form v-if="!submitted">
        <label>Blog Title: </label>
        <input type="text" v-model.lazy="blog.title" required>
        <label>Blog Content: </label>
        <textarea v-model.lazy="blog.content"></textarea>
        <div id="checkboxes">
            <label>Ninjas</label>
            <input type="checkbox" value="ninjas" v-model="blog.categories">
            <label>Wizards</label>
            <input type="checkbox" value="wizards" v-model="blog.categories">
            <label>Mario</label>
            <input type="checkbox" value="mario" v-model="blog.categories">
            <label>Cheese</label>
            <input type="checkbox" value="cheese" v-model="blog.categories">
        </div>
        <label>Author: </label>
        <select v-model="blog.author">
            <option v-for="(author, index) in authors" :key="index">{{ author }}</option>
        </select>
        <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
        <h3>Thanks for adding your post.</h3>
    </div>
    <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog Title: {{ blog.title }}</p>
        <p>Blog Content: {{ blog.content }}</p>
        <p>Blog Categories: </p>
        <ul>
            <li v-for="(category, index) in blog.categories" :key="index">{{ category }}</li>
        </ul>
        <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                author: ''
            },
            authors: ['The Net Ninja', "The Angular Avenger", "The Vue Vindicator"],
            submitted: false,
        }
    },
    methods: {
        post: function(){
            //this(refer to this component).$http(vue resource).post('databese name', {data:data})(http method name and where we want to store, our data what we want to store)
            // This one is with face database
            /*this.$http.post('https://jsonplaceholder.typicode.com/posts', {
                title: this.blog.title,
                content: this.blog.content,
                userId: 1,
            }).then(function(data){
                this.submitted = true;
                console.log(data);
            });
            */
            // This one is with firebase realtime database
            this.$http.post('https://blog-22854.firebaseio.com/posts.json', this.blog).then(function(data){
                // console.log(data);
                this.submitted = true;
            });
        },
    }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea, select{
    display: block;
    width: 100%;
    padding: 8px;
}
textarea{
    height:200px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
    margin-top: 0;
}
hr{
    display: none;
}
button{
    display: block;
    margin: 20px 0;
    background: crimson;
    color: #fff;
    border: 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
}
</style>
