<template>
    <div>

        <div class="card mb-3" style="max-width: 540px;"  v-for="item in products" :key="item.prodID"></div>
            <div class="row g-0">
              <div class="col-md-4">
                <img :src="item.prodUrl" class="card-img-top" alt="">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title text-white">{{ item.prodName }}</h5>
                    <p class="card-text">{{ item.category }}</p>
                    <p class="card-text">R{{ item.amount }}</p>
                    <p class="card-text">{{ item.prodDesc }}</p>
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
    this.$store.dispatch("fetchProduct");
  },
  methods:{
      
    }
    }
</script>

<style scoped>

</style>