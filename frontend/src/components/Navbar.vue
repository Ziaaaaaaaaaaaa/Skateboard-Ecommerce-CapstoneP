<template>
       <div>
        <nav class="navbar navbar-expand-lg position-fixed w-100" style="z-index: 99999;">
          <div class="container-fluid pt-4 pb-4">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                <li class="nav-item px-2">
                  <router-link class="text" to="/">Home</router-link>
                </li>
                <li class="nav-item px-2">
                  <router-link class="text" to="/about">About us</router-link>
                </li>
                <li class="nav-item px-2">
                  <router-link class="text" to="/products">Products</router-link>
                </li>
                <li class="nav-item px-2">
                  <router-link class="text" to="/contact">Contact us</router-link>
                </li>
                <li class="nav-item px-2">
                  <router-link class="text" to="/signup">Signup</router-link>
                </li>
                <li class="nav-item px-2">
                  <router-link class="text" to="/admin">Admin</router-link>
                </li>
                <li class="nav-item px-2">
                  <router-link class="text" to="/login"><i class="bi bi-person-circle"></i></router-link>
                </li>
                <li class="nav-item px-2">
                  <router-link class="text" to="/checkout"><i class="bi bi-cart2"></i></router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <img src="https://i.postimg.cc/Y0g0X3Vb/New-Project-2-1.png" class="w-100 home-img"  alt="">
      </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
nav {
    background: #3a393989;
   
  }
</style>