<template>
    <div>
        <v-layout row wrap no-gutters class="white pa-5 mt-6">
            <v-flex xs12 md12 lg12 text-center>
                    <h3>
                        View Real-Time Activities
                    </h3>
            </v-flex>
            <v-flex xs12 md12 lg12>
                    <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">#</th>
               <th class="text-left">USER</th>
              <th class="text-left"> ACTIVITIES</th>
              <th class="text-left">TIME</th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="(item,index) in users.reverse()" :key="item._id">
                  <td>
                        {{index+1}}
                  </td>
                  <td>
                      {{item.user}}
                  </td>
                  <td v-if="item.punch==true ">
                       <span class="green--text"> Logged In
                           </span> 
                  </td>
                  <td v-else-if="item.punch==false">
                      <span class="red--text"> Logged Out
                           </span> 
                  </td>
                  <td v-else> {{item.msg_action}}</td>
                    <td>
                        {{item.punching_time}}
                  </td>

              </tr>
          </tbody>
        </template>
                    </v-simple-table>

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
            users : []
        }
    },
    async mounted(){
        let url = BASE_URL + "/auth/user/list"
        let {data} = await Axios.get(url)
        this.users = data
    }

}
</script>