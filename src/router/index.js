import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'

import Activities from '../views/Activities.vue'
import Chats from '../views/Chats.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path : '/Activities',
    name : 'Activities',
    component : Activities
  },
  {
    path : '/Chats',
    name : 'Chats',
    component : Chats
  },
  
  
  

]

const router = new VueRouter({
  routes
})

export default router
