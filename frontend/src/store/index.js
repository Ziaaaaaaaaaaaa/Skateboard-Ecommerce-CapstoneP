import { createStore } from 'vuex'
import axios from 'axios'
import useCookies from 'vue3-usecookies'
import sweet from 'sweetalert'
const url = 'https://skateboard-ecom.onrender.com/'

// const instance = axios.create({
//   baseURL: 'https://skateboard-ecom.onrender.com/users',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })

const { cookies } = useCookies();

export default createStore({
  state: {
    products: null,
    product: null,
    selectedProduct: null,
    users: null,
    addProduct: null,
    msg:null
    
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
    setUser(state,user){
      state.users= user
    },
    setAddProd(state, data){
      state.addProduct = data
    },
    setDeleteProd(state, data){
      state.products = data
    },
    setDeleteUser(state, data){
      state.users = data
    },
    setMsg(state,msg){
      state.msg = msg;
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
    
    // async deleteUser(context, userID) {
    //   const response = await axios.delete(`${url}user/${userID}`)
    //   location.reload()
    //   context.dispatch('setProducts')
    // },
   
   
    async deleteUser(context, userID) {
      try {
        const { data } = await axios.delete(`${url}user/${userID}`)
        context.commit("setDeleteUser");
      } catch (e) {
        context.commit("setMsg", "An error occurred.");
      }
    },

    // async register({commit},userData){
    //   try{
    //     const response = await axios.post('https://skateboard-ecom.onrender.com/users', userData);
    //     console.log(response.data);
    //     commit('setUser',response.data.user);
    //  }
    //  catch (error){
    //   console.error(error);
    //  }
    // }
    // },

    // async register(context, payload) {
    //   try {
    //     const { msg } = (await axios.post(`${artUrl}users`, payload)).data;
    //     if (msg) {
    //       sweet({
    //         title: "Registration",
    //         text: msg,
    //         icon: "success",
    //         timer: 4000,
    //       });
    //       context.dispatch("fetchUsers");
    //       router.push({ name: "login" });
    //     } else {
    //       sweet({
    //         title: "Error",
    //         text: msg,
    //         icon: "error",
    //         timer: 4000
    //       });
    //     }
    //   } catch (e) {
    //     context.commit("setMsg", "An error has occured");
    //   }
    // },

    async login(context, payload) {
      try {
        const { msg, token, data } = (
          await axios.post(`${dataUrl}users`,payload)
        ).data;
        console.log(data);
        if (data) {
          context.commit("setUser",{data, msg });
          cookies.set("ActualUser",{ msg, token, data});
          Authenticate.applyToken(token);
          console.log('Logged In');
          // sweet({
          //   title: msg,
          //   text: `Welcome back ${data?.firstName} ${data?.lastName}`,
          //   icon: "success",
          //   timer: 2000,
          // });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
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
    },
  modules: {
  }
})
