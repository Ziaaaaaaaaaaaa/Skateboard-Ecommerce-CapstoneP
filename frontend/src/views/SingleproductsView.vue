<template>
  <div class="container">
    <div v-if="selectedProduct">
      <!-- <h1>{{ selectedProduct.prodName }}</h1>
      <img :src="selectedProduct.prodUrl" style="width: 18rem" alt=""> -->
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="selectedProduct.prodUrl" class=" rounded-start" style="width: 18rem" alt="">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title text-black">{{ selectedProduct.prodName }}</h5>
              <p class="card-text text-black">{{ selectedProduct.prodDesc }}</p>
            </div>
          </div>
        </div>
      </div>

      
      
    </div>
    <div v-else>
    </div>
  </div>
</template>

<script>
    export default {
      computed: {
      selectedProduct() {
        return this.$store.state.selectedProduct;
      },
    },
    created() {
  const prodID = this.$route.params.prodID;
  this.fetchProduct(prodID)
},
mounted(){
  this.fetchProduct()
},
    methods:{
      fetchProduct(prodID){
        this.$store.dispatch('fetchProduct', prodID)
      }
    }

  };
</script>

<style scoped>

</style>