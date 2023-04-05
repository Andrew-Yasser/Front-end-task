import { createApp } from 'vue'
import App from './App.vue'
import Projects from './pages/Projects.vue'
import Posts from './pages/Posts.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    { path: '/', component: Projects },
    { path: '/posts', component: Posts },
  ]
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })
  

createApp(App).use(router).mount('#app')


