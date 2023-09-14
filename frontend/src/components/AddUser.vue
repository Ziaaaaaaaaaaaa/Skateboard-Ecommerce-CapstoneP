<template>
    <div>
        <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@mdo">Add</button>
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel2">New message</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="addForm" class="d-flex flex-column gap-5">
            <input type="text" class="text-black" v-model="userdata.firstName" placeholder="first name" name="" id="" required>
            <input type="text" class="text-black" v-model="userdata.lastName" placeholder="last name" name="" id="" required>
            <input type="text" class="text-black" v-model="userdata.gender" placeholder="gender" name="" id="" required>
            <input type="text" class="text-black" v-model="userdata.userDOB" placeholder="DOB" name="" id="">
            <input type="text" class="text-black" v-model="userdata.userRole" placeholder="Role" name="" id="">
            <input type="text" class="text-black" v-model="userdata.emailAdd" placeholder="email address" name="" id="">
            <input type="text" class="text-black" v-model="userdata.userPass" placeholder="password" name="" id="">
            <input type="text" class="text-black" v-model="userdata.profileUrl" placeholder="image" name="" id="">
            <button type="submit" class="btn btn-dark">Add</button>
           </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn  btn-dark" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>
<script>
    export default {
        data(){
    return{
        userdata:{
            firstName: "",
            lastName: "",
            gender: "",
            userDOB: "",
            userRole: "",
            emailAdd: "",
            userPass: "",
            profileUrl: "",

      }
    }
  },
  methods:{
          addForm(){
            this.$store.dispatch('addUser', this.userdata)
          }
        }
    }
</script>
<style scoped>

</style>









