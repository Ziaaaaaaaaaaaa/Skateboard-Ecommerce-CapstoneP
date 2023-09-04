<template>
    <div class="custom-container container h-100 pt-5 pb-5">
        <h1 class="form-heading">Sign Up</h1>
        <form>
            <div class="mb-3">
              <label for="exampleInputFullname1" class="form-label">Fullname</label>
              <input type="fullname" class="form-control" id="exampleInputFullname1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="d-flex justify-content-center">

                <button type="submit" class="btn  btn-outline-light">Sign up</button>
            </div>
          </form>
    </div>
</template>

<script>
    export default {
        
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