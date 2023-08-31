<template>
  <div class="home">
    <div class="container">
      <div class="features">       
        <div>
          <h1 class="text-center text-white text-uppercase mb-5 pt-5">Featured Products</h1>
        </div>
        <div class=" d-flex justify-content-center">
  
          <div class="card" style="width: 18rem;" v-for="item in products" :key="item.prodID">
            <img :src="item.prodUrl" class="w-100 test" alt="">
            <div class="card-body">
              <h5 class="card-title text-white">{{ item.prodName }}</h5>
              <p class="card-text text-white">{{ item.category }}</p>
              <p class="card-text text-white">{{ item.prodDesc }}</p>
              <p class="card-text text-white">{{ item.prodUrl }}</p>
              <div class="card-link-wrapper">
                <a href="" class="btn  btn-outline-light me-2">Buy Now</a>
                <button class="btn  btn-outline-light ">View More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  mounted() {
    this.$store.dispatch("fetchBoards");
  },
  methods:{
      
    }
};
</script>

<style scoped>
  .card{
    background-color: rgb(57, 57, 57);
  }

  .features{
    margin-top: 20rem;
    background-color: rgb(129, 129, 129);
  }
</style>
