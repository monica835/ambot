<template>
<section class="login-block">
  <div class="container mx-auto">
    <div class="row mx-auto">
      <div class="col-md-8 login-sec mx-auto">
        <h2 class="text-center mx-auto">Register</h2>
        <form class="login-form mx-auto" @submit="onsubmit">
          <v-text-field v-model="data.firstname" label="Firtsname" :prepend-icon="'mdi-account'" required></v-text-field>
          <v-text-field v-model="data.lastname" label="Lastname" :prepend-icon="'mdi-account'" required></v-text-field>
          <v-text-field v-model="data.address" label="Address" :prepend-icon="'mdi-map-marker'" required></v-text-field>
          <v-text-field v-model="data.age" label="Age" type="number" :prepend-icon="'mdi-account-card-details'" min="1" required></v-text-field>
          <v-text-field v-model="data.contactnumber" label="Contact Number" :prepend-icon="'mdi-phone'" type="string" min="0" required></v-text-field>
          <v-text-field v-model="data.email" label="E-mail" :prepend-icon="'mdi-account-circle'" required></v-text-field>
          <v-text-field v-model="data.username" label="Username" :prepend-icon="'mdi-account'" required></v-text-field>
          <v-text-field v-model="data.password" label="Password" :prepend-icon="'mdi-eye-off'" type="password" required></v-text-field>
          <div class="form-check">
            <label class="form-check-label">
                  <input type="checkbox" class="form-check-input">
                  <small>Remember Me</small>
                </label>
            <button type="submit" class="btn btn-login float-right">Submit</button>
          </div>
          <br>
          <br>
          <div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</template>
<style scoped>
@import url("//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css");
.login-block[data-v-63ae9146][data-v-63ae9146] {
  background: #1E90FF;
  background: -webkit-gradient( linear, left top, left bottom, from(#1E90FF), to(#0000FF));
  background: linear-gradient( to bottom, #1E90FF, #0000FF);
  width: 45%;
  height: auto;
  margin-top: 4%;
  margin-left: 25%;
  padding: 50px 0;
  border-radius: 20px;
}

.container {
  background: #fff;
  border-radius: 10px;
  box-shadow: 15px 20px 0px rgba(0, 0, 0, 0.1);
  max-width: 1141px;
  height: 99%;
}

.login-sec[data-v-63ae9146][data-v-63ae9146] {
  padding: 41px -1px;
  width: 448px;
  position: relative;
  margin-left: 17%;
}

.container[data-v-63ae9146][data-v-63ae9146][data-v-63ae9146] {
  width: 450px;
  height: auto;
}

.login-sec .copy-text {
  position: absolute;
  width: 80%;
  bottom: 20px;
  font-size: 13px;
  text-align: center;
}

.login-sec .copy-text i {
  color: rgb(63, 124, 238);
}

.login-sec .copy-text a {
  color: rgb(74, 163, 204);
}

.login-sec h2 {
  margin-bottom: 30px;
  font-weight: 800;
  font-size: 30px;
  color: dodgerblue;
}

.login-sec h2:after {
  content: " ";
  width: 100px;
  height: 5px;
  background: dodgerblue;
  display: block;
  margin-top: 20px;
  border-radius: 3px;
  margin-left: auto;
  margin-right: auto;
}

.btn-login {
  background: dodgerblue;
  color: #fff;
  font-weight: 600;
}
</style>
<script>
import axios from "axios";
import AUTH from "..//services/auth"
import ROUTER from "../router"
export default {
  auth: AUTH,
  props: {
    source: String
  },
  data() {
    return {
      data: {
        lastname: "",
        firstname: "",
        address: "",
        age: "",
        contactnumber: "",
        email: "",
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onsubmit(e) {
      console.log(e);
      // e.preventDefault();
      sessionStorage.setItem("lastname", this.data.lastname)
      sessionStorage.setItem("firstname", this.data.firstname)
      sessionStorage.setItem("address", this.data.address)
      sessionStorage.setItem("age", this.data.age)
      sessionStorage.setItem("contactnumber", this.data.contactnumber)
      sessionStorage.setItem("email", this.data.email)
      sessionStorage.setItem("username", this.data.username)
      sessionStorage.setItem("password", this.data.password)
      AUTH.register(this.data.lastname, this.data.firstname, this.data.address, this.data.age, this.data.contactnumber, this.data.email, this.data.username, this.data.password);
      axios.post("http://localhost:5000/accountsUsers", this.data).then(response => {
        alert(response);
        this.data = "";
        ROUTER.push("/login");
      }).catch(err => {
        console.log(err)
      });
    }
  }
};
</script>


