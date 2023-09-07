import { createStore } from 'vuex'
import axios from 'axios'
import useCookies from 'vue3-usecookies'
// import sweet from 'sweetalert'
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
    product: null,
    selectedProduct: null,
    users: null,
    addProduct: null
  },
  getters: {
  },
  mutations: {
    setProducts(state, data){
      state.products = data
    },
    setProduct(state, data){
      state.product = data
    },
    setSelectedProd(state, board){
      state.selectedProduct = board
    },
    setUsers(state, users){
      state.users = users
    },
    setAddProd(state, data){
      state.addProduct = data
    },
    setDeleteProd(state, data){
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
        commit('setSelectedProd', response.data.result[0])
      } catch (error) {
        console.error(error);
      }
    },

    async addProduct({commit}, productdata) {
      try {
        const response = await axios.post(`${url}products`, productdata)
      commit('setAddProd', response.data)
      console.log("success");
      } catch (e) {
        console.log('Error adding product');
      }
    },
    async deleteProduct({ commit }, product_id) {
      const response = await axios.delete(`${apiUrl}products/${product_id}`)
      location.reload()
      commit('setDeleteProd', response)
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
