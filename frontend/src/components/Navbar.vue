<template>
    <div class="custom-container">
        <nav class="custom-container">
          <h1>SKATE<span>HUB</span></h1>
          <ul>
            <li class="nav-item">
              <router-link class="text" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="text" to="/about">About us</router-link>
            </li>
            <li class="nav-item">
              <router-link class="text" to="/admin">Admin</router-link>
            </li>
            <li class="nav-item">
              <router-link class="text" to="/store">Store</router-link>
            </li>
            <li class="nav-item">
              <router-link class="text" to="/contact">Contact us</router-link>
            </li>
          </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
nav.custom-container{
    background: #ffffffa5;
    border-radius: 50px;
    box-shadow: 0 25px 20px -20px rgba(0, 0, 0, 0.4);
    position: -webkit-sticky;
    position: fixed;
    top: 0;
    
  }
  nav ul .nav-item{
    list-style: none;
    display: inline-block;
    padding-right: 12px;
    margin: 10px;
    font-size: 18px;
    font-weight: 500;
    color: #d6d6d6;
    cursor: pointer;
    position: relative;
    z-index: 2;
    transition: color 0.5s;
    /* display: flex; */
    align-items: center;
    /* justify-content: center; */
    margin-top: 10px;
    margin-bottom: 1px;
    margin-right: 1.3;
  }
  nav ul .nav-item::after{
    content: '';
    background: #a1a1a188;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    position: absolute;
    top: 100%;
    left: 41%;
    transform: translate(-50%, -50%);
    z-index: -1;
    opacity: 0;
    transition: top 0.5s, opacity 0.5s;
    margin-right: 1rem;
  }
  nav ul .nav-item:hover{
    color: #fff;
    cursor: pointer;
    align-items: center;
    /* margin-right: 1rem; */
  }
  nav ul .nav-item:hover::after{
    top: 50%;
    opacity: 1;
    align-items: center;
    /* margin-right: 1rem; */
  }
</style>