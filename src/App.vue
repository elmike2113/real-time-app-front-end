<template>
  <v-app class="custom-style pl-10 pr-10" style="height:100%">
    <v-main style="height:100%" v-if= "LOGGED_IN_USER">
    <Menu />
      <div class="pl-10 pr-10">
        <router-view></router-view> 
      </div>
    </v-main>
    <v-main v-else>
      <LoginCard/>
    </v-main>
  </v-app>
</template>

<script>

import {mapGetters} from 'vuex'
import LoginCard from '@/views/LoginCard.vue'
import Menu from '@/views/Menu.vue';


export default {
  name: 'App',
  computed : {
    ...mapGetters(["LOGGED_IN_USER"])
  },
  components: {
    Menu,
    LoginCard
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.custom-style{
    font-family: 'Montserrat', sans-serif;
   
       /* font-family:"Quicksand"; */
    background-color: #eceff1 !important;
}
</style>
