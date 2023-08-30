<template>
  <div class="home">
    <div class="heading">
      <h1 class="heading-text text-white">Product Page</h1>
    </div>
        <div class="container">
          <h1 class="text-center text-white text-uppercase mb-5 pt-5">Products</h1>
          <h2 class="text-white">skateboards</h2>
          <ul class="cards">
            <li class="card" v-for="item in products" :key="item.prodID">
              <div>
                <img :src="item.prodUrl" class="w-100 test" alt="">
                <p class="text-white">{{ item.prodName }}</p>
                <div class="card-content">
                  <p class="text-white">{{ item.category }}</p>
                </div>
              </div>
              <div class="card-link-wrapper">
                <a href="" class="btn  btn-outline-light me-2">Buy Now</a>
                <button class="btn  btn-outline-light ">View More</button>
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
.div-store {
  padding: 4rem;
  margin-inline: 1rem;
  position: relative;
  bottom: 9rem;
}

.text-center{
  border-top-left-radius: 50px;

}

.container{
  background-color: rgb(25, 25, 25);
  position: relative;
  padding-left: 10rem;
  bottom: 4rem;
}

.custom-img {
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.custom-img:hover {
  object-fit: contain;
}

.side-text {
  font-size: 7rem;
  color: white;
  transform: rotate(-90deg);
  position: fixed;
  right: 73rem;
  bottom: 15rem;
  font-weight: 200;
  z-index: 2;
}

.test {
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.card{
  background-color: rgb(79, 79, 79);
  width: 18rem;
}

.heading{
  border-radius: 20px;
  background-color: rgba(24, 24, 24, 0.58);
  position: relative;
  z-index: 1;
  bottom: 32rem;
  left: 27rem;
  padding-inline: 2rem;
  padding-block: 2rem;
  margin-right: 51rem;

}

.heading-text{
  font-size: 7rem;
}

</style>

