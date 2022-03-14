import Axios from 'axios'
import {BASE_URL} from '../config'

const state={
    loggedInUser:null,
    token:'',
    }

const getters = {
    LOGGED_IN_USER: state =>{
        return state.loggedInUser
    },
   
    TOKEN: state =>{
        return state.token
    }
}
const mutations ={
    SET_TOKEN: (state,payload)=>{
        state.token=payload
    },
    SET_USER :(state,payload)=>{
        state.loggedInUser=payload
    },
   
    
}

const actions = {
    USER_LOGIN : async (context ,payload) => {
        let url = BASE_URL + "/auth/user/signin";
        let {data} = await Axios.post(url,payload)
        if (data.success) {
            context.commit("SET_TOKEN",data.token)
            context.commit("SET_USER",data.user)
           // alert(JSON.stringify(data))
        } else {
      //      alert(JSON.stringify(data.msg))
        }
    },
  
   
    USER_LOGOUT : async (context,payload) => {
            context.commit("SET_USER",payload)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
