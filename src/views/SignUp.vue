<template>
    <div class="white mx-16 elevation-2 py-10">
        <v-layout row wrap no-gutters text-center >
            <v-flex xs12 md12 lg12 sm12 class="my-5" >
                    <h3> SIGN UP HERE...
                        </h3> 
            </v-flex>
            <v-flex xs12 md4 offset-md4 lg4 offset-lg4 sm12>
                    <v-text-field label="Enter Name"
                    outlined v-model="name">

                    </v-text-field>
            </v-flex>
             <v-flex xs12 md4 offset-md4 lg4 offset-lg4 sm12>
                <v-text-field label="Enter Phone"
                   
                    outlined
                    v-model="phone"
                    type="number">
                    </v-text-field>
                   </v-flex>

              <v-flex xs12 md4 offset-md4 lg4 offset-lg4 sm12>
                     <v-text-field  v-model="password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                outlined
                @click:append="showPassword = !showPassword">

                    </v-text-field>
                              </v-flex>
         <v-flex xs12 md12 sm12 lg12>
             <v-btn @click="signup" class="green white--text">
                 Sign Up
             </v-btn>
         </v-flex>

        </v-layout>
    </div>
</template>

<script>
import {BASE_URL} from '@/config.js'
import Axios from 'axios'
export default {
    data(){
        return{
            name : "",
             phone : "",
            password : "",
            showPassword : false,
           
        }
    },
    methods:{
        signup(){
            let url = BASE_URL + "/auth/user/signup" 
           let payload = {
               name : this.name,
               phone : this.phone,
              password : this.password
           }
           Axios.post(url,payload)
           this.name ="" 
           this.phone =""
           this.password = ""
           this.$toastr.s("Signed Up Successfully!!")
           this.$router.go(0)
        }
    }
}
</script>