<template>
    <div>
        <v-layout row wrap no-gutters class="white mt-6 pa-6"  v-if="flag==false">
            <v-flex xs12 md12 lg12 sm12 text-center>
                <h3>
                    Create a Message...
                </h3>

            </v-flex>
            <v-flex xs10 md4 offset-md4 lg4 offset-lg4>
                <v-text-field label="Type a message"
              outlined  v-model="msg">

                </v-text-field>

            

            </v-flex>
            <v-flex xs2 class="mt-2 pl-3">
                    <v-btn @click="save" class="green white--text">
                    Send
                </v-btn>

            </v-flex>

            <v-flex xs12 text-center md12 lg12 class="mt-6">
                    <h3>
                        YOUR MESSAGES
                    </h3>
            </v-flex>
  
             <v-flex xs12 md12 lg12 >
                    <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">#</th>
               <th class="text-left">MESSAGE</th>
              <th class="text-left"> ACTION</th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="(item,index) in msgs" :key="item._id"> 
                  <td>
                    {{index+1}}
                  </td>
                  <td>
                  {{item.msg}}
                  </td>
                  <td>
                    <v-btn class="orange white--text" @click="editmsg(item._id,item.msg)">
                        Edit
                    </v-btn>
                 
                        <v-btn @click="deletemsg(item._id)" class=" ml-3 red white--text">
                        Delete
                    </v-btn>
                    
                  </td>

              </tr>
          </tbody>
        </template>
                    </v-simple-table>

            </v-flex>
           
        </v-layout>
        <v-layout row wrap no-gutters v-if="flag" class="white pa-7 mt-6">
            <v-flex xs12 md12 lg12 sm12 text-center>
                <h3 class="mb-6">
                    Edit Your Message...
                </h3>

            </v-flex>
            <v-flex xs10 md4 offset-md4 lg4 offset-lg4>
                <v-text-field label="Type a message"
              outlined  v-model="editmsgg">

                </v-text-field>

            

            </v-flex>
            <v-flex xs2 class="mt-2 pl-3">
                    <v-btn @click="saveEditmsg" class="green white--text">
                    Send
                </v-btn>

            </v-flex>
        </v-layout>
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
            msg : "",
            msgs : [],
            flag : false,
            editmsgg : "",
            msg_id : ""
        }
    },
    async mounted(){
       
        let url = BASE_URL + "/auth/user/list/message?id=" + this.LOGGED_IN_USER._id 
        let {data} = await Axios.get(url)
        this.msgs = data
        //alert(JSON.stringify(this.msgs))
    },
    methods:{
        editmsg(id,msg){
            this.editmsgg = msg
            this.flag = true
            this.msg_id = id

           // alert(this.editmsgg)
           

        },
        saveEditmsg(){
         let url = BASE_URL + "/auth/user/edit/message?id=" + this.msg_id 
            let payload = {
               msg : this.editmsgg,
              user : this.LOGGED_IN_USER.name
           }
           Axios.post(url,payload)
           this.$router.go(0)
           this.editmsgg ="" 
           this.$toastr.s("Message Edited succesfully")
        },
       save(){
           let url = BASE_URL + "/auth/user/create/message"
            let payload = {
               msg : this.msg,
               id : this.LOGGED_IN_USER._id,
              user : this.LOGGED_IN_USER.name
           }
           Axios.post(url,payload)
           this.$router.go(0)
           this.msg ="" 
           this.$toastr.s("Message created succesfully")
        
       },
      async deletemsg(id){
            let url = BASE_URL + "/auth/user/delete/message?id=" + id
            let payload= {
                user : this.LOGGED_IN_USER.name
            }
           Axios.post(url,payload)
        this.$router.go(0)
        this.$toastr.s("Message Deleted")
           {
                let url = BASE_URL + "/auth/user/list/message?id=" + this.LOGGED_IN_USER._id 
        let {data} = await Axios.get(url)
        this.msgs = data
        }
       }
    }
}
</script>