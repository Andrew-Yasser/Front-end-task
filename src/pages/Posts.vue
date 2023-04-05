<!-- https://jsonplaceholder.typicode.com/posts -->

<template>
    <div class="container">
        <div class="post_container" v-for="post in posts">
            <div class="title">{{post.title}}</div>
            <div class="body">{{post.body}}</div>
        </div>

    </div>
</template>
  
<script>
import axios from 'axios'
export default {
    name: 'Posts',
    components: {

    },
    data() {
        return {
            posts: []
        }
    },
    mounted(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            this.posts = response.data;
        })
    }
}
</script>
  
<style scoped>
.container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.post_container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    padding: 10px;
    width: 30%;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.048);
    border-radius: 10px;
    height: 150px;
    overflow-y: scroll;
    background-color: rgba(238, 238, 238, 0.226);
}

.post_container:hover{

    border: 1px solid rgba(0, 0, 0, 0.192);
}


.title{
    margin-bottom: 10px;
    font-weight: 600;
}

.body{
    text-align: left;
}
</style>