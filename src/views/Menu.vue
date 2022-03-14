<template>
    <div class="">
        <v-navigation-drawer 
        v-model="drawer"  app 
        mini-variant-width="220"
        :clipped="$vuetify.breakpoint.lgAndUp"  
        >
            <div>
                <v-list dense>
                    <div class="text-center mb-5">
                        <v-avatar size="100">
                                <img 
                                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                                    alt="John"
                                >
                              
                                </v-avatar>
                                  <v-badge dot color="success"
                                   offset-x="28"
                                  offset-y="47">

                                  </v-badge>
                    </div>
                     
                    <template  class="" v-for="i in items" >

                        <v-layout row wrap no-gutters
                        v-if="i.text"
                        :key="i.text">
                       
                                <v-flex  @click="selectItem(i.text)"
                                 class="primary--text 
                                   pl-13 
                                 font-weight-bold py-2"
                                  >
                                  <v-icon color="blue"
                                  size="27" class="pr-3">
                                      {{i.icon}}
                                  </v-icon>
                                    {{i.text}}
                                </v-flex>
                        </v-layout>
                    </template>

                </v-list>
            </div>



        </v-navigation-drawer>

        <v-app-bar class="primary" app
        :clipped-left="$vuetify.breakpoint.lgAndUp" >
        <v-icon color="white" @click.stop ="drawer = !drawer">
                mdi-menu
        </v-icon>
        <v-toolbar-title>
            <!-- <img src="../assets/logo.png"  width="50px"
            height="60px" /> -->
        </v-toolbar-title>
        </v-app-bar>
    </div>
</template>

<script>
import {BASE_URL} from '@/config.js'
import Axios from 'axios'
import { mapGetters } from "vuex"; 
export default {
    computed: {
    ...mapGetters(["LOGGED_IN_USER",])
  },
    data(){
        return{
            drawer : false,
            items : [
                {
                    icon : "mdi-timer-sand",
                    text : "Activities"
                },
                 {
                    icon : "mdi-message-bulleted",
                    text : "Chats"
                },
                {
                    icon : "mdi-logout",
                    text : "Logout"
                },
            ]
        }
    },
    methods:{
       selectItem(i){
           if(i == 'Chats'){
               this.$router.push("/Chats")
           }
            if(i == 'Activities'){
               this.$router.push("/Activities")
           }
          
           else if(i=='Logout')
           {
            
        let context = this;
        this.$swal({
          title: "Are you sure?",
          text: "Unsaved changed will be lost!!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#00C853",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, logout !",
        }).then(async (result) => {
          if (result.isConfirmed) {
               let payloadd = {
           user : this.LOGGED_IN_USER.name

          };
          let url = BASE_URL + "/auth/user/logout"
          Axios.post(url,payloadd)
           
            this.$toastr.s("Logout Success", "success");
            let payload = null;
            context.$store.dispatch("USER_LOGOUT", payload);
            this.$router.push("/");
          }
        });
   
           }
       }
    }
}
</script>