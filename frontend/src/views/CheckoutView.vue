<template>
    <div class="container">
        <center>
            <h1 class="title">Checkout</h1>
      </center>

        <!-- <button @click="Test" type="button">Test</button> -->
            <div v-if="cart">
                <div class="card mb-3" style="max-width: 540px;" v-for="prod in cart" :key="prod.prodID">
                    <div class="row g-0">
                      <div class="col-md-4">
                          <img :src="prod.key.prodUrl" style="width: 10rem" alt="">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                            <h1>{{ prod.key.prodName }}</h1>
                            <h2> {{ prod.key.category }}</h2>
                            <p> {{ prod.key.quantity }}</p>
                            <p> {{ prod.key.prodDesc }}</p>
                            <p> {{ prod.key.amount }}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div v-else>
            <h1>Cart is empty</h1>
        </div>
            <button class="btn btn-dark" @click="buy">Buy now</button>
        </div>
</template>

<script>
import sweet from 'sweetalert'
    export default {
        computed: {
            cart() {
                const cart = JSON.parse(localStorage.getItem("cart"))
                return cart
            },
            // Test() {
            //     console.log(this.cart);
            // }
            buy(){
                sweetAlert({
                title: "Checkout",
                text: 'Orders Complete',
                icon: "success",
                timer: 3000,
          });

          localStorage.removeItem('cart')
          setTimeout(()=>{
            location.reload()
          }, 2000)
            }
        }
        
    }
</script>

<style scoped>

.card {
    background-color: rgb(57, 57, 57);
  }
.title{
    font-size: 4rem;
    border-radius: 20px;
    background-color: rgba(24, 24, 24, 0.58);
    position: relative;
    z-index: 1;
    bottom: 26rem;
    width: 50%;
  }

  h2{
    font-size: 1.5rem;
  }
</style>