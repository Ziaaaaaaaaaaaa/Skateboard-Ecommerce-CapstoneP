<template>
  <div class="container">
    <center>
      <h1 class="title">Single Products</h1>
    </center>
    <div class="container text-center pt-5 pb-5" v-if="selectedProduct">
      <div class="row">
        <div class="col">
          <img
            :src="selectedProduct.prodUrl"
            class="rounded-start"
            style="width: 18rem"
            alt=""
          />
        </div>
        <div class="col">
          <h5 class="card-title text-white">{{ selectedProduct.prodName }}</h5>
          <p class="card-text-1 text-white">
            Category: {{ selectedProduct.category }}
          </p>
          <p class="card-text text-white">
            Quantity: {{ selectedProduct.quantity }}
          </p>
          <p class="card-text text-white">
            Price: R{{ selectedProduct.amount }}
          </p>
          <p class="card-text text-white">
            Description: {{ selectedProduct.prodDesc }}
          </p>
        </div>
      </div>
    </div>

    <div v-else class="d-flex justify-content-center align-content-center">
      <img
        src="../assets/image/oie_4124746Iyfhd6WY.gif"
        class="spinner"
        alt=""
      />
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
    this.fetchProduct(prodID);
  },
  mounted() {
    this.$store.dispatch("fetchProduct");
  },
};
</script>

<style scoped>
.spinner {
  width: 9rem;
}
.container {
  background-color: rgb(52, 52, 52);
  border-radius: 50px;
}

h5 {
  text-align: left;
  font-size: 3rem;
}
p {
  text-align: left;
}

p.card-text-1 {
  font-size: 1.5rem;
}

.title {
  font-size: 4rem;
  border-radius: 20px;
  background-color: rgba(24, 24, 24, 0.58);
  position: relative;
  z-index: 1;
  bottom: 26rem;
  width: 50%;
}
</style>
