<template>
    <div class="main">
      <h2>Edit Product</h2>
     <center><form @submit.prevent="EditProd">
        <input v-model="editproduct.prodName" type="number" placeholder="Parking number" class="form-control" /><br>
        <input v-model="editproduct.parkingImg" type="text" placeholder="Image URL" class="form-control"/><br>
        <input v-model="editproduct.price" type="number" placeholder="Price" class="form-control"/><br>
        <div>
            <button type="submit" class="btn btn-successbtn btn-success">Save</button>
         <a href="/admin" class="btn btn-info">Back</a>
        </div>
      </form></center>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        editproduct: {
          parkingID: this.id,
          parkingNum: "",
          parkingImg: "",
          price: "",
        },
      };
    },
    props: ["id"],
    methods: {
      editproduct() {
              this.$store.dispatch("Confimeditproduct", this.editproduct);
        alert("Parking space updated")
      },
    },
  };
  </script>
  <style scoped>
  .main{
    background-color:rgba(0, 0, 0, 0.893);
    height: 55vh;
}
input{
    width: 40%;
}
h2{
    color: whitesmoke;
}
form div{
    display: flex;
    justify-content: center;
    gap: 1rem;
}
</style>