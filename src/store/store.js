import axios from '@/utilities/http.js'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    'SET_USERS': (state, payload) => { state.users = payload }
  },
  actions: {
    loadUsers (context) {
      axios
        .get('users')
        .then((response) => {
          context.commit('SET_USERS', response.data)
        })
        .catch((error) => { console.log(error) })
    }
  }
})

export default store
