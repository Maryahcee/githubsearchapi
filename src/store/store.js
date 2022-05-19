/* eslint-disable prettier/prettier */
import { createStore } from 'vuex'
import axios from 'axios'
import {GITHUB_USERS_URL} from '../users'

export default createStore({
  state: {
    user: {},
    error: '',
    theme: '',
  },
  mutations: {
    SET_USER(state, user) {
        state.user = user.data
    },
    SET_ERROR(state, error) {
        state.error = error
    },
    SET_THEME(state, theme) {
        state.theme = theme
    },
  },
  getters: {
      getUser: state =>{
          return state.user
      },
      getError: state =>{
          return state.error
      },
      getTheme: state => {
          return state.theme
      }
  },
  actions: {
      //fetch users
      async fetchUsers ({ commit },username) {
          let getUserUrl = GITHUB_USERS_URL + username
          await axios.get(getUserUrl) 
          .then((response) => {
              commit('SET_USER', response)
              commit('SET_ERROR', '')
          })
          .catch((error) => {
              //handle error
              if(error === undefined) { 
                commit('SET_ERROR', 'Empty error')
          } else
            {
                commit('SET_ERROR', '')
                commit('SET_ERROR', 'No User')
            }
        })
      },
      //Update theme
      updateTheme({commit}, theme) {
        commit('SET_THEME', theme)
      },
  },
});
