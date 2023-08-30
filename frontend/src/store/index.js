import { createStore } from 'vuex'
import axios from 'axios'

const url = 'https://skateboard-ecom.onrender.com/'


export default createStore({
  state: {
    products: null,
  },
  getters: {
  },
  mutations: {
    setProducts(state, data){
      state.products = data
    }
  },
  actions: {
    async fetchBoards({commit}){
      const fetchedData = await axios.get(`${url}products`)
      commit('setProducts', fetchedData.data.results)
    },
  
    async fetchProduct({commit}, prodID){
      try {
        const response = await axios.get(`${url}product/${prodID}`)
        commit('setSelectedProduct', response.data.result[0])
      } catch (error) {
        console.error(error);
      }
    }
    },

  modules: {
  }
})
