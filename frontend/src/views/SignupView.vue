<template>
  <div class="custom-container container h-100 pt-5 pb-5">
    <h1 class="form-heading">Sign Up</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="exampleInputFirstname" class="form-label">First Name</label>
        <input v-model="userData.firstName" type="text" class="form-control" id="exampleInputFirstname" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputLastname" class="form-label">Last Name</label>
        <input v-model="userData.lastName" type="text" class="form-control" id="exampleInputLastname" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputGender" class="form-label">Gender</label>
        <input v-model="userData.gender" type="text" class="form-control" id="exampleInputGender" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputDOB" class="form-label">Date of Birth</label>
        <input v-model="userData.userDOB" type="text" class="form-control" id="exampleInputDOB" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail" class="form-label">Email address</label>
        <input v-model="userData.emailAdd" type="email" class="form-control" id="exampleInputEmail">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword" class="form-label">Password</label>
        <input v-model="userData.userPass" type="password" class="form-control" id="exampleInputPassword">
      </div>
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-outline-light">Sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        firstName: "",
        lastName: "",
        gender: "",
        userDOB: "",
        emailAdd: "",
        userPass: "",
        profileUrl: ""
      }
    };
  },
  methods: {
    async submitForm() {
      await this.$store.dispatch('register', this.userData);
    }
  }
};
</script>

<style scoped>
.form-heading {
  display: flex;
  justify-content: center;
  align-content: center;
}

.custom-container {
  background-color: rgb(52, 52, 52);
  border-radius: 50px;
  position: relative;
  bottom: 5rem;
  min-width: 16rem;
  max-width: 40%;
}
</style>
