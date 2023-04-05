<template>
  <NavigationBar/>
  <router-view></router-view>
</template>

<script>
import Projects from './pages/Projects.vue'
import NavigationBar from '@/components/NavigationBar.vue';
import Posts from './pages/Posts.vue'
export default {
  name: 'App',
  components: {
    NavigationBar,
    Projects,
    Posts
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f5f5f5;
}
*{
  padding: 0;
  margin: 0;
}
</style>
