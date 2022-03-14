<template>
    <div class="">
        <v-navigation-drawer 
        v-model="drawer"  app 
        mini-variant-width="220"
        :clipped="$vuetify.breakpoint.lgAndUp"  
        >
          
                    
          <div class="mt-6">
              <div class="text-center mb-3">
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
                                  <p class="font-weight-bold  mt-3">
                                      {{this.LOGGED_IN_USER.name}}
                                  </p>
                    </div>
        <v-list dense class="mt-4">
          <template v-for="item in items">
            <v-row
              v-if="item.heading"
              :key="item.heading"
              align="center"
            >
            
              <v-col
                cols="6"
                class="text-center"
              >
                <a
                  href="#!"
                  class="body-2 green--text"
                >EDIT</a>
              </v-col>
            </v-row>
           
            <v-list-item
            
              :key="item.text"
              link
              class="mt-3"
              @click="selectItem(item.text)"
            >
              <v-list-item-action>
                <v-icon class="blue--text ">{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="blue--text">
                  <b>{{ item.text }}</b>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
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
                    text : "Messages"
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
           if(i == 'Messages'){
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