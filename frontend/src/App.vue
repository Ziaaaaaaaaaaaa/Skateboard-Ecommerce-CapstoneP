<template>
  <div>
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/FooterComp.vue'
  export default {
    components:{
    Navbar,
    Footer
  }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  
}

nav {
  padding: 30px;
}

nav a {
  color: #ffffff;
  text-decoration: none;
}

nav a.router-link-exact-active {
  text-decoration: none;
}
</style>
