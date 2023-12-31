import axios from 'axios'
import router from '../router.js'

export default {
    namespaced: true,
    state:{
        authenticated:false,
        user:{}
    },
    getters:{
        authenticated(state){
            return state.authenticated
        },
        user(state){
            return state.user
        }
    },
    mutations:{
        SET_AUTHENTICATED (state, value) {
            state.authenticated = value
        },
        SET_USER (state, value) {
            state.user = value
        }
    },
    actions:{
        login({commit}){
            return axios.get('/api/auth/user').then((response)=>{
                commit('SET_USER',response.data)
                commit('SET_AUTHENTICATED',true)
                router.push({ name: 'dashBoard', params: {} }).catch(error => {
                    console.info(error.message)
                 })
                // this.$router.push({ name: 'dashBoard', params: {} }).catch(() => {});

            }).catch((error)=>{
                console.error("An error occurred:", error);
                commit('SET_USER',{})
                commit('SET_AUTHENTICATED',false)
            })
        },
        logout({commit}){
            commit('SET_USER',{})
            commit('SET_AUTHENTICATED',false)
        }
    }
}
