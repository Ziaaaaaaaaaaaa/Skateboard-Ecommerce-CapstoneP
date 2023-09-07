import { createStore } from 'vuex'
import axios from 'axios'
import useCookies from 'vue3-usecookies'
import sweet from 'sweetalert'


const url = 'https://skateboard-ecom.onrender.com/'

const instance = axios.create({
  baseURL: 'https://skateboard-ecom.onrender.com/users',
  headers: {
    'Content-Type': 'application/json'
  }
})

const { cookies } = useCookies();

export default createStore({
  state: {
    products: null,
    selectedProduct: null,
    user: null
  },
  getters: {
  },
  mutations: {
    setProducts(state, data){
      state.products = data
    },
    setSelectedProd(state, board){
      state.selectedProduct = board
    },
    setUser(state, user){
      state.user = user
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
        commit('setSelectedProd', response.data.result[0])
      } catch (error) {
        console.error(error);
      }
    },

    async register({commit},userData){
      try{
        const response = await axios.post('https://skateboard-ecom.onrender.com/users', userData);
        console.log(response.data);
        commit('setUser',response.data.user);
     }
     catch (error){
      console.error(error);
     }
    }

    },

  modules: {
  }
})
