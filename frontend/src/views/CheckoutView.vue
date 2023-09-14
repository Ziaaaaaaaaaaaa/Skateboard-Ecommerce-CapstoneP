<template>
    <div>
        <h1>hello</h1>
        <!-- <button @click="Test" type="button">Test</button> -->
        <div v-if="cart">
            <div v-for="prod in cart" :key="prod.prodID">
                <h1>{{ prod.key.prodName }}</h1>
                <img :src="prod.key.prodUrl" style="width: 10rem" alt="">
            </div>
            <button class="btn btn-dark" @click="buy">Buy now</button>
        </div>
        <div v-else>
            <h1>Cart is empty</h1>
        </div>

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

</style>