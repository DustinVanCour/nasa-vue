import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const _api = axios.create({
  baseURL: "https://api.nasa.gov/planetary"

})
let apiKey = "apod?api_key=MM9caXS9DEOuzb1NRrY6M9k74FFKBeErlhfddBOm&date="

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    image: {}
  },
  mutations: {
    setImage(state, data) {
      state.image = data
    }

  },
  actions: {
    searchApi({ commit, dispatch }, query) {
      _api.get(apiKey + query)
        .then(res => {
          let data = res.data
          commit('setImage', data)
        })
    }

  }
})
