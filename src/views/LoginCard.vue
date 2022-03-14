<template>
    <v-layout row wrap style="height:100%" class="mt-10">
        <v-flex v-if="flag==false" class="xs12 md4
         offset-md-4 ">
            <div class=" pa-10 white elevation-2 xs12">
          
            <div class="text-center">
               
             <h3 class="mt-5">USER LOGIN</h3>
             </div>
             <br>
             <br>
             <v-row dense>
            
                <v-col>
                  <v-text-field
                    single-line
                    outlined
                    v-model="phone"
                    :rules="numRules"
                    label="Phone"
                    type="number"
                    class="inputPhone"                  
                  ></v-text-field>
                </v-col>
            </v-row>
            <v-text-field
                v-model="password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                :rules="[rules.required, rules.min]"
                label="Password"
                single-line
                outlined
                @click:append="showPassword = !showPassword"
            ></v-text-field>
            <br>
            <div class="text-center">
                <v-btn class="green white--text pl-8 pr-8 ml-7" large rounded @click="login">Sign in <v-icon class="ml-5 white--text">mdi-arrow-right</v-icon></v-btn></div>
                <span class="blue--text ">
                        Not Signed Up yet? 
                    </span>
                   <v-btn class="green  ml-4
                   white--text pl-8 mt-3
                    pr-8"
                    large rounded @click="signup">
                       Sign Up <v-icon class="ml-5 white--text">
                           mdi-arrow-right</v-icon> </v-btn>
                </div>

                
        </v-flex>

        <v-flex  xs12 md12 lg12 sm12 v-else>
                <SignUp/>
        </v-flex>
    </v-layout>
</template>

<script>
import SignUp from './SignUp.vue'
export default {
    components:{
        SignUp
    },
    data(){
        return{
            flag : false,
            phone : "",
            password : "",
            showPassword : false,
            numRules: [
                v => !!v || 'Required.',

                         ],
            rules: {
                required: value => !!value || 'Required.',
                
            },
        }
    },
      methods: {
      login() {
          if (((this.phone).length>10)||((this.phone).length<9)){
              this.$toastr.e("Contact Info Invalid.");
            }else{
          let payload = {
              "phone": this.phone,
              "password": this.password
          
      };
      this.$store.dispatch("USER_LOGIN", payload);
      }
      },
       signup(){
           this.flag= true
      }
      },
     
}
</script>

<style scoped>
    .vertical-spacing{
        height: 34px;
    }
</style>
