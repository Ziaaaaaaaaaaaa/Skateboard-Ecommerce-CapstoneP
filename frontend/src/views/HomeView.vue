<template>
  <div class="home h-100">    
        <div class="custom-container container">
          <h1 class="text-center  text-uppercase mb-5 pt-5">Featured Products</h1>
          <div class="row">
            <div class="col mb-5" v-for="item in products" :key="item.prodID">
              <div v-if="products">
                <div class="card m-auto" style="width: 18rem;" >
                  <img :src="item.prodUrl" class="card-img-top" alt="">
                  <div class="card-body h-50">
                    <h5 class="card-title text-white">{{ item.prodName }}</h5>
                    <p class="card-text">{{ item.category }}</p>
                    <p class="card-text">R{{ item.amount }}</p>
                    <div class="card-link-wrapper">
                      <a href="" class="btn btn-outline-light me-2">Buy Now</a>
                      <router-link class="btn  btn-outline-light" :to="'/product/' + item.prodID">View More</router-link>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="d-flex justify-content-center align-content-center">
                <img src="../assets/image/oie_4124746Iyfhd6WY.gif" class="spinner" alt="">
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
  },
  selectedProduct() {
    return this.$store.state.selectedProduct;
  },
},
mounted() {
  this.$store.dispatch('fetchBoards');// You may need to pass a prodID as an argument here.
  this.$store.dispatch('fetchProduct', this.prodID);// You may need to pass a prodID as an argument here.
},


};
</script>

<style scoped>
  .card{
    background-color: rgb(20, 20, 20);
  }


.custom-container{
  background-color: rgb(52, 52, 52);
  border-radius: 50px;
  position: relative;
  bottom: 5rem;
  min-width: 16rem;
  max-width: 70%;
}
  .features{
    margin-bottom: 10rem;
    }
</style>
