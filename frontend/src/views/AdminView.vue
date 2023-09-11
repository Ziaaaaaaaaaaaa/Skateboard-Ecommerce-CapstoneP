<template>
    <div class="admin">
        <h1 class="admin-heading">Admin</h1>
        <h2 class="section-heading">Products</h2>
        <button @click="addProduct" class="btn btn-dark"><AddProduct/></button>
        <div class="table-responsive" >
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stock Quantity</th>
                <th>Image</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in products" :key="item.prodID">
                <td>{{ item.prodID }}</td>
                <td>{{ item.prodName }}</td>
                <td>{{ item.prodDesc }}</td>
                <td>{{ item.quantity }}</td>
                <td>{{ item.amount }}</td>
                <td><img :src="item.prodUrl" :alt="item.prodName" style="max-width: 100px;"></td>
                <td><button @click="editProduct(item)" class="btn btn-dark">Edit</button></td>
                <td><button @click="deleteProduct(item.prodID)" class="btn btn-dark">Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 class="section-heading">Users</h2>
        <button @click="addUser" class="btn btn-dark">Add User</button>
        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Profile Image</th>
                <th>User Role</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in Users" :key="user.userID">
                <td>{{ user.userID }}</td>
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.emailAdd }}</td>
                <td><img :src="user.rofileUrl" :alt="user.firstName" style="max-width: 100px;"></td>
                <td>{{ user.userRole }}</td>
                <td><button @click="editUser(user)" class="btn btn-dark">Edit</button></td>
                <td><button @click="deleteUser(user.userID)" class="btn btn-dark">Delete</button></td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
</template>

<script>
import AddProduct from "@/components/AppProduct.vue";
    export default {
        components: {
            AddProduct
        },

        methods: {
            
          deleteUser(item) {
        if (confirm("Please confirm")) {
          try {
            this.$store.dispatch("deleteUser", item);
          } catch (e) {
            console.log("Error deleting user:");
          }
        }
      },
      deleteProduct(prodID) {
        if (confirm("Please confirm")) {
          try {
            this.$store.dispatch("deleteProduct", prodID);
          } catch (e) {
            console.log("Error deleting product");
           
          }
        }
      },
    },
        computed:{
            Users() {
                return this.$store.state.users
            },
            products() {
                return this.$store.state.products
            }            
        },
        mounted() {
            this.$store.dispatch('fetchBoards')
            this.$store.dispatch("fetchUsers")
        }
    }

</script>

<style scoped>

</style>