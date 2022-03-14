import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'

import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
 
export default new Vuex.Store({
 plugins: [createPersistedState({paths:['user.token','user.loggedInUser']})],
 state: {
    
  
  },
  getters : {
   

 },
  mutations: {
 

  },

  actions: {
   
  
  
  },
 modules: {
 user
 }
})
