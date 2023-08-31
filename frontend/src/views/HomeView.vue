<template>
  <div class="home h-100">
      <div class="features">       
          <h1 class="text-center  text-uppercase mb-5 pt-5">Featured Products</h1>
        <div class="container">
          <div class="row">
            <div class="col mb-5" v-for="item in products" :key="item.prodID">
              <div class="card m-auto" style="width: 18rem;" >
                <img :src="item.prodUrl" class="card-img-top" alt="">
                <div class="card-body h-50">
                  <h5 class="card-title text-white">{{ item.prodName }}</h5>
                  <p class="card-text">{{ item.category }}</p>
                  <p class="card-text">R{{ item.amount }}</p>
                  <div class="card-link-wrapper">
                    <a href="" class="btn btn-outline-light me-2">Buy Now</a>
                    <button class="btn  btn-outline-light ">View More</button>
                  </div>
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
    margin-bottom: 10rem;
    }
</style>
