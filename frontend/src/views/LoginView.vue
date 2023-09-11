<template>
    <div class="custom-container container h-100 pt-5 pb-5">
        <h1 class="form-heading">Login</h1>
        <form @submit.prevent="login">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" v-model="payload.emailAdd" class="form-control" id="exampleInputEmail1">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" v-model="payload.userPass" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="d-flex justify-content-center">

                <button type="submit" class="btn  btn-outline-light">Login</button>
            </div>
          </form>
    </div>
</template>

<script>
import { useCookies } from "vue3-cookies"
const {cookies} = useCookies()
    export default {
        data() {
            return {
                payload: {
                    emailAdd: "",
                    userPass: "",
                },
            };
        },
        computed: {
            user() {
                return this.$store.state.user;
            },
        },
        methods: {
            login() {
                this.$store.dispatch('login', this.payload)
                console.log('running');
            }
        },
        mounted() {
            console.log(cookies.get('ActualUser'));
        }
    }
</script>

<style scoped>
.form-heading{
    display: flex;
    justify-content: center;
    align-content: center;
}

.custom-container{
    background-color: rgb(52, 52, 52);

    border-radius: 50px;
    position: relative;
    bottom: 5rem;
    min-width: 16rem;
    max-width: 40%;
}


</style>