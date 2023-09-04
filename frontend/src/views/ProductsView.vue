<template>
  <div class="home">
    <div class="heading">
      <div class="d-flex justify-content-center ">
        <h1 class="heading-text text-white">Product Page</h1>
      </div>
    </div>
        <div class="container">
          <h1 class="text-center text-white text-uppercase mb-5 pt-5">Products</h1>
          <h2 class="text-white">skateboards</h2>
          <ul class="cards">
            <li class="card" v-for="item in products" :key="item.prodID">
              <div v-if="products">
                <div>
                  <img :src="item.prodUrl" class="card-img-top" alt="">
                  <div class="card-body"></div>
                  <p class="text-white">{{ item.prodName }}</p>
                  <div class="card-content">
                    <p class="text-white">{{ item.category }}</p>
                  </div>
                  <div class="card-content">
                    <p class="text-white">R{{ item.amount }}</p>
                  </div>
                </div>
                <div class="card-link-wrapper">
                  <a href="" class="btn  btn-outline-light me-2">Buy Now</a>
                  <router-link class="btn  btn-outline-light" :to="'/product/' + item.prodID">View More</router-link>
                </div>
              </div>
              <div v-else class="d-flex justify-content-center align-content-center">
                <img src="../assets/image/oie_4124746Iyfhd6WY.gif" class="spinner" alt="">
              </div>
            </li>
          </ul>
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


.text-center{
  border-top-left-radius: 50px;

}

  .card{
    background-color: rgb(20, 20, 20) !important
  }
.container{
  background-color: rgb(52, 52, 52);
  position: relative;
  padding-left: 10rem;
  bottom: 10rem;
  border-radius: 50px;
}



.card{
  background-color: rgb(79, 79, 79);

}

.heading{
  border-radius: 20px;
  background-color: rgba(24, 24, 24, 0.58);
  position: relative;
  z-index: 1;
  bottom: 26rem;
  width: 35%;
  
}

.heading-text{
  font-size: 5rem;
}

.cards {
  display: flex;
  padding: 25px 0px;
  list-style: none;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}

.card {
  display: flex;
  flex-direction: column;
  flex: 0 0 100%;
  padding: 20px;
  background: var(--white);
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
  scroll-snap-align: start;
  transition: all 0.2s;
}

.card:not(:last-child) {
  margin-right: 10px;
}

/* .card:hover {
  color: var(--white);
  background: var(--red);
} */

.card .card-title {
  font-size: 20px;
}

.card .card-content {
  margin: 20px 0;
  max-width: 85%;
}

.card .card-link-wrapper {
  margin-top: auto;
}

.card .card-link {
  display: inline-block;
  text-decoration: none;
  color: white;
  background: var(--red);
  padding: 6px 12px;
  border-radius: 8px;
  transition: background 0.2s;
}

.card:hover .card-link {
  background: var(--darkred);
}

.cards::-webkit-scrollbar {
  height: 12px;
  background-color: rgba(255, 255, 255, 0.269);
}

.cards::-webkit-scrollbar-thumb,
.cards::-webkit-scrollbar-track {
  border-radius: 92px;
  background-color: white;
}

.cards::-webkit-scrollbar-thumb {
  background: var(--darkred);
  background-color: white;
}

.cards::-webkit-scrollbar-track {
  background: var(--thumb);
}

@media (min-width: 700px) {
  .card {
    flex-basis: calc(calc(100% / 3) - 20px);
  }

  .card:not(:last-child) {
    margin-right: 30px;
  }
}

@media (min-width: 1100px) {
  .card {
    flex-basis: calc(25% - 30px);
  }

  .card:not(:last-child) {
    margin-right: 40px;
  }
}
</style>

