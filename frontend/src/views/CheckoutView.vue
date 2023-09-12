<template>
    <div>
        <h1>hello</h1>
        <!-- <button @click="Test" type="button">Test</button> -->
        <div v-if="cart">
            <div v-for="prod in cart" :key="prod.prodID">
                <h1>{{ prod.key.prodName }}</h1>
                <img :src="prod.key.prodUrl" style="width: 10rem" alt="">
            </div>
        </div>
        <div v-else>
            <h1>Cart is empty</h1>
        </div>

    </div>
</template>

<script>
    export default {
        computed: {
            cart() {
                const cart = JSON.parse(localStorage.getItem("cart"))
                return cart
            },
            // Test() {
            //     console.log(this.cart);
            // }
        }
        
    }
</script>

<style scoped>

</style>