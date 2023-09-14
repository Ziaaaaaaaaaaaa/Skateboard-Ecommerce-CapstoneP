<template>
  <div class="admin">
    <div class="container">
      <h1 class="admin-heading">Admin</h1>
      <h2 class="section-heading">Products</h2>
      <button @click="addProduct" class="btn">
        <AddProduct />
      </button>
      <div class="table-responsive">
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
              <td>
                <img
                  :src="item.prodUrl"
                  :alt="item.prodName"
                  style="max-width: 100px"
                />
              </td>
              <td>
                <button
                  @click="editProduct(item)"
                  class="btn btn-outline-light"
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  @click="deleteProduct(item.prodID)"
                  class="btn btn-outline-light"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 class="section-heading">Users</h2>
      <button @click="addUser" class="btn">
        <AddUser />
      </button>
      <div class="table-responsive">
        <table class="w-100">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Date of birth</th>
              <th>Role</th>
              <th>Email</th>
              <th>Profile Image</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="edituser in Users" :key="edituser.userID">
              <td>{{ edituser.userID }}</td>


              <template v-if="edituser.isEditUser">
                <input
                  type="text"
                  class="form-control"
                  v-model="edituser.firstName"
                />
              </template>


              <template v-else>
                <td>{{ edituser.firstName }}</td>
              </template>

              <template v-if="edituser.isEditUser">
                <td>

                  <input
                    type="text"
                    class="form-control"
                    v-model="edituser.lastName"
                  />
                </td>
              </template>


              <template v-else>
                <td>{{ edituser.lastName }}</td>
              </template>


              <template v-if="edituser.isEditUser">
                <td>

                  <input
                    type="text"
                    class="form-control"
                    v-model="edituser.gender"
                  />
                </td>
              </template>


              <template v-else>
                <td>{{ edituser.gender }}</td>
              </template>


              <template v-if="edituser.isEditUser">
                <td>

                  <input
                    type="text"
                    class="form-control"
                    v-model="edituser.userDOB"
                  />
                </td>
              </template>


              <template v-else>
                <td>{{ edituser.userDOB }}</td>
              </template>


              <template v-if="edituser.isEditUser">
                <td>

                  <input
                    type="text"
                    class="form-control"
                    v-model="edituser.userRole"
                  />
                </td>
              </template>


              <template v-else>
                <td>{{ edituser.userRole }}</td>
              </template>


              <template v-if="edituser.isEditUser">
                <td>

                  <input
                    type="text"
                    class="form-control"
                    v-model="edituser.emailAdd"
                  />
                </td>
              </template>


              <template v-else>
                <td>{{ edituser.emailAdd }}</td>
              </template>

              <template v-if="!edituser.isEditUser">
                <td>
                  <img
                    :src="edituser.profileUrl"
                    :alt="edituser.firstName"
                    style="max-width: 100px"
                  />
                </td>
              </template>
              <template v-else>
                <input type="text" class="form-control" v-model="edituser.profileUrl">
              </template>

              <template v-if="edituser.isEditUser">
                <td>
                  <button @click="saveUser(edituser)" class="btn btn-outline-light">
                    Save
                  </button>
                </td>
              </template>
              <template v-else>
                <td>
                  <button @click="editUser(edituser)" class="btn btn-outline-light">
                    Edit
                  </button>
                </td>
              </template>

              <template v-if="!edituser.isEditUser">
                <td>
                  <button @click="editUser(edituser)" class="btn btn-outline-light">
                    Delete
                  </button>
                </td>
              </template>

              <template v-if="edituser.isEditUser">
                <td>
                  <button @click="cancel(edituser)" class="btn btn-outline-light">
                    Cancel
                  </button>
                </td>
              </template>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import AddProduct from "@/components/AppProduct.vue";
import AddUser from "@/components/AddUser.vue";
export default {
  components: {
    AddProduct,
    AddUser,
  },

  data() {
    return {
      edituser: {
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

  methods: {
    deleteUser(edituser) {
      if (confirm("Please confirm")) {
        try {
          this.$store.dispatch("deleteUser", edituser);
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

    editUser(edituser) {
      edituser.isEditUser = true;
      
    },
    async saveUser(edituser) {
      try {
        const { isEditUser, ...update } = edituser
        await this.$store.dispatch('ConfimEditUser', update)
        edituser.isEditUser = false;
      } catch (error) {
        console.error(error);
      }
    },
    cancel(edituser) {
      edituser.isEditUser = false
    },
  },
  computed: {
    Users() {
      return this.$store.state.users;
    },
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchBoards");
    this.$store.dispatch("fetchUsers");
  },
};
</script>

<style scoped></style>
