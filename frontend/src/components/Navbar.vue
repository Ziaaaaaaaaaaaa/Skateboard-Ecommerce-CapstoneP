<template>
       <div>
        <nav class="navbar navbar-expand-lg position-fixed w-100" style="z-index: 99999;">
          <div class="container-fluid pt-4 pb-4">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav d-flex align-items-center m-auto mb-2 mb-lg-0">
                <li class="nav-item px-4">
                  <router-link class="text" to="/">Home</router-link>
                </li>
                <li class="nav-item px-4">
                  <router-link class="text" to="/about">About us</router-link>
                </li>
                <li class="nav-item px-4">
                  <router-link class="text" to="/products">Products</router-link>
                </li>
                <li class="nav-item px-4">
                  <router-link class="text" to="/contact">Contact us</router-link>
                </li>
                <li class="nav-item px-4">
                  <router-link class="text" to="/signup">Signup</router-link>
                </li>
                <li class="nav-item px-4">
                  <router-link class="text" to="/admin">Admin</router-link>
                </li>
                <li class="nav-item px-4">
                  <router-link class="text" to="/login"><i class="bi bi-person-circle"></i></router-link>
                </li>
                <li class="nav-item px-2">
                  <router-link class="text" to="/checkout"><i class="bi bi-cart2"></i></router-link>
                </li>
                <li class="nav-item px-2">
                  <button class="text btn" @click="logout"><i class="bi bi-box-arrow-left"></i></button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <img src="https://i.postimg.cc/Y0g0X3Vb/New-Project-2-1.png" class="w-100 home-img"  alt="">
      </div>
</template>

<script>
import {useCookies} from "vue3-cookies";
const {cookies} = useCookies();
    export default {
        computed: {
          user() {
            return this.$store.state.user ||
            cookies.get('ActualUser')
          },
          result() {
            return this.user?.result
          },
          isAdmin() {
            return this.result?.userRole?.toLowerCase() === "admin"
          },
          logout(){
            cookies.remove('ActualUser')
          }
        }
    };
</script>

<style scoped>
nav {
  height: 100px;
  background-color: rgba(0, 0, 0, 0.317); /* For browsers that do not support gradients */
  background-image: linear-gradient(180deg, rgba(50, 50, 50, 0.678), rgb(237, 237, 237));  z-index: 99999;
  }

  .bi{
    color: black;
    width: 4rem;
  }

  .navbar-nav li:after,
  .navbar-nav li:before {
  content: "";
  position: absolute;
  width: 0%;
  display: block;
  height: 1px;
  transition: all 0.3s ease;
  margin-top: 2px;
}

.navbar-nav li:after {
  bottom: 25%;
}

.navbar-nav li:before {
  top: 25%;
}

.navbar-nav li:hover::after {
  width: 5%;
  height: 1px;
  bottom: 25%;
  background-color: #fff;
}
.navbar-nav li:hover::before {
  width: 5%;
  height: 1px;
  top: 25%;
  background-color: #fff;
}
</style>