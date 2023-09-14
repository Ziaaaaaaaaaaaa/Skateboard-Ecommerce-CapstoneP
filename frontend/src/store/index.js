import { createStore } from 'vuex'
import axios from 'axios'
import {useCookies} from 'vue3-cookies'
import sweet from 'sweetalert'
import auth from '@/services/AuthenticateUser'
import router from '@/router'
const url = 'https://skateboard-ecom.onrender.com/'


const { cookies } = useCookies();

export default createStore({
  state: {
    products: null,
    product: null,
    selectedProduct: null,
    featuredProds: null,
    skateboards: null,
    decks: null,
    users: null,
    addProduct: null,
    addUser: null,
    msg:null,
    search:null
  },
  getters: {
    sortedProd(state) {
      return state.search
    }
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
    setFeature(state, data){
      state.featuredProds = data
    },
    setSkateboard(state, data){
      state.skateboards = data
    },
    setDecks(state, data){
      state.decks = data
    },
    setUsers(state, users){
      state.users = users
    },
    setUser(state,user){
      state.users= user
    },
    setAddProd(state, data){
      state.addProduct = data
    },
    setDeleteProd(state, data){
      state.products = data
    },
    setAddUser(state, data){
      state.addUser = data
    },
    setDeleteUser(state, data){
      state.users = data
    },
    setMsg(state,msg){
      state.msg = msg;
    },
    SortName(state) {
      state.products.sort((a, b) =>  a.prodName.localeCompare(b.prodName));
    },
    SortPrice(state) {
      state.products.sort((a, b) => a.amount - b.amount);
    }
  },
  actions: {
    async fetchBoards({commit}){
      const fetchedData = await axios.get(`${url}products`)
      commit('setProducts', fetchedData.data.results)
    },
    async fetchUsers({commit}){
      const fetchUsers = await axios.get(`${url}users`)
      commit('setUsers', fetchUsers.data.results)
    }, 
    async fetchProduct({commit}, prodID){
      try {
        const response = await axios.get(`${url}product/${prodID}`)
        commit('setSelectedProd', response.data.result[0])
      } catch (error) {
        console.error(error);
      }
    },  
    async fetchFeatured({commit}){
      const fetchedFeatures = await axios.get(`${url}featured`)
      commit('setFeature', fetchedFeatures.data.results)
    },
    async fetchSkateboards({commit}){
      const fetchedSkateboards = await axios.get(`${url}complete`)
      commit('setSkateboard', fetchedSkateboards.data.results)
    },
    async fetchDecks({commit}){
      const fetchedDecks = await axios.get(`${url}decks`)
      commit('setDecks', fetchedDecks.data.results)
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
    async deleteProduct(context, prodID) {
      const response = await axios.delete(`${url}product/${prodID}`)
      location.reload()
      context.dispatch('setProducts')
    },  
    async createUser({commit}, userdata) {
      try {
        const response = await axios.post(`${url}user`, userdata)
      commit('setAddUser', response.data)
      console.log("success");
      } catch (e) {
        console.log('Error adding user');
    }
    },
    async deleteUser(context, userID) {
      try {
        const { data } = await axios.delete(`${url}user/${userID}`)
        context.commit("setDeleteUser");
      } catch (e) {
        context.commit("setMsg", "An error occurred.");
      }
    },
    async register(context, payload) {
      try {
        const { msg } = (await axios.post(`${url}register`, payload)).data;
        if (msg) {
          sweet({
            title: "Registration",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          context.dispatch("fetchUsers");
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
    async login(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${url}login`,payload)
        ).data;
        if (result) {
          context.commit("setUser",{result, msg });
          cookies.set("ActualUser",{ msg, token, result});
          auth.applyToken(token);
          sweet({
              title: msg,
              text: `Welcome back ${result?.firstName} ${result?.lastName}`,
              icon: "success",
              timer: 2000,
            });
            router.push({name: "home"})
        } else {
            sweet({
                title: msg,
                text: `Error`,
                icon: "error",
                timer: 2000,
              });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
        console.log(e);
      }
    },
    async addUser(context, payload){
      try{
        const { msg } = (await axios.post(`${dataUrl}register`, payload)).data;
        if (msg) {
          sweetAlert({
            title: "Registration",
            text: msg,
            icon: "success",
            timer: 2000,
          });
          context.dispatch("fetchUsers");
          router.push({ name: "login"});
        } else {
          sweetAlert({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 2000,
          })
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
    async SortingName(context) {
      try {
        const { data } = await axios.get(`${url}products`);
        context.commit("SortName", data.results);
      } catch (e) {
        context.commit("setMsg", "An Error has occured")
      }
    },
    async SortingAmount(context) {
      try {
        const { data } = await axios.get(`${url}products`);
        context.commit("SortPrice", data.results);
      } catch (e) {
        context.commit("setMsg", "An Error has occured")
      }
    },
    },
  modules: {
  }
})
