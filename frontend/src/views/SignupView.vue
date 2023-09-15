<template>
  <div class="custom-container container h-100 pt-5 pb-5">
    <center>
      <h1 class="title">Sign Up</h1>
</center>
      <h1 class="form-heading">Sign Up</h1>
      <form @submit.prevent="register">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Full name</label>
            <input type="firstname" v-model="userdata.firstName" class="form-control">
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Last name</label>
            <input type="lastname" v-model="userdata.lastName" class="form-control">
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Gender</label>
            <input type="gender" v-model="userdata.gender" class="form-control">
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">DOB</label>
            <input type="dob" v-model="userdata.userDOB" class="form-control">
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">User Role</label>
            <input type="userRole" v-model="userdata.userRole" class="form-control">
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" v-model="userdata.emailAdd" class="form-control">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" v-model="userdata.userPass" class="form-control">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Profile Pic</label>
            <input type="profilepic" v-model="userdata.profileUrl" class="form-control">
          </div>
          <div class="d-flex justify-content-center">

              <button type="submit" class="btn  btn-outline-light">Sign up</button>
          </div>
        </form>
  </div>
</template>

<script>
import { useCookies } from "vue3-cookies"
const {cookies} = useCookies()
  export default {
      data() {
          return {
            userdata: {
                  firstName: "",
                  lastName: "",
                  gender: "",
                  userDOB: "",
                  userRole: "",
                  emailAdd: "",
                  userPass: "",
                  profileUrl: ""
              },
          };
      },
      computed: {
          user() {
              return this.$store.state.user;
          },
      },
      methods: {
          register() {
              this.$store.dispatch('addUser', this.userdata)
              console.log(this.userdata);
          }
      },
      mounted() {
          console.log(cookies.get('ActualUser'));
      }
  }
</script>

<style scoped>
.form-heading{
  display: flex;
  justify-content: center;
  align-content: center;
}

.custom-container{
  background-color: rgb(52, 52, 52);

  border-radius: 50px;
  position: relative;
  bottom: 5rem;
  min-width: 16rem;
  max-width: 40%;
}

.title{
  font-size: 4rem;
  border-radius: 20px;
  background-color: rgba(24, 24, 24, 0.58);
  position: relative;
  z-index: 1;
  bottom: 26rem;
  width: 50%;
}
</style>