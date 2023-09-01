<template>
    <div>
      <!-- <div class="row" style="margin-top: 3rem" >
        <div class="car col-12 col-sm-6 col-md-4 p-2" >
          <img
            :src="$route.query.img" :alt="$route.query.img"
            style="width: 9rem; height: 9rem"
            loading="lazy"
          />
          <div class="card-body">
            <br />
            <h5 class="card-title">{{ $route.query.prodName }}</h5>
            <h5 class="card-title">{{ $route.query.Category }}</h5>
            <br />
            <p class="card-text">R {{ $route.query.amount }}</p>
            <p class="card-text">Qty: {{ $route.query.quantity }}</p>
          </div>
        </div>
      </div> -->
        <div class="card mb-3" style="max-width: 540px;"></div>
            <div class="row g-0">
              <div class="col-md-4">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <img :src="selectedProduct.prodUrl" class="card-img-top" alt="">
                    <h5 class="card-title text-white">{{ selectedProduct.prodName }}</h5>
                    <p class="card-text">{{ selectedProduct.category }}</p>
                    <p class="card-text">R{{ selectedProduct.amount }}</p>
                    <p class="card-text">{{ selectedProduct.prodDesc }}</p>
                </div>
              </div>
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
  this.$store.dispatch('fetchProduct', prodID);
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