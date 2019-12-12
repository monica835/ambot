<template>
<section class="login-block">
  <div class="container mx-auto">
    <div class="row mx-auto">
      <div class="col-md-8 login-sec mx-auto">
        <h2 class="text-center mx-auto">Login Now</h2>
        <forms>
          <v-text-field v-model="email" placeholder="email" name="email" :prepend-icon="'mdi-account-circle'" type="email"></v-text-field>
          <v-text-field id="password"  placeholder="Password" name="password" :prepend-icon="'mdi-lock'" type="password" v-model="password"></v-text-field>
          <div class="form-check mx-auto">

            <button type="submit" class="btn btn-login float-right" >Submit</button>
          </div>
          <br>
          <br>
          <div class="word">
            <h1 style="font-size:20px; margin-top:35%;">
              Don't have an account? Click
              <a @click="register">Register!!..</a>
            </h1>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</template>
<style scoped>
@import url("//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css");
.login-block[data-v-26084dc2][data-v-26084dc2][data-v-26084dc2] {
  background: dodgerblue;
  background: -webkit-gradient( linear, left top, left bottom, from(#1e90ff), to(#0000ff));
  background: linear-gradient(to bottom, #1e90ff, #0000ff);
  float: left;
  width: 25%;
  height: auto;
  padding: 50px 0;
  margin-top: 8%;
  margin-left: 34%;
  border-radius: 20px;
}

.login-sec h2[data-v-26084dc2] {
  margin-bottom: 30px;
  font-weight: 800;
  font-size: 30px;
  color: dodgerblue;
}

.login-sec[data-v-26084dc2] {
  padding: 51px 0px;
  position: relative;
  margin-left: 46px;
}

.img-fluid[data-v-26084dc2] {
  max-width: 100%;
  height: 562px;
}

.container[data-v-26084dc2][data-v-26084dc2][data-v-26084dc2] {
  background: #fff;
  border-radius: 10px;
  height: 85%;
  -webkit-box-shadow: 15px 20px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 15px 20px 0px rgba(0, 0, 0, 0.1);
  margin-top: 3%;
  width: 77%;
}

.word {
  font-family: "Courier New", Courier, monospace;
  font-size: 1.5rem;
}

.login-sec h2[data-v-26084dc2]:after {
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

.container[data-v-26084dc2] {
  background: #fff;
  border-radius: 10px;
  height: 85%;
  -webkit-box-shadow: 15px 20px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 15px 20px 0px rgba(0, 0, 0, 0.1);
  margin-top: 3%;
}

.login-sec {
  padding: 50px 30px;
  position: relative;
}

.login-sec .copy-text {
  position: absolute;
  width: 80%;
  bottom: 20px;
  font-size: 13px;
  text-align: center;
}

.btn-login[data-v-26084dc2] {
  background: white;
  color: #fff;
  background-color: dodgerblue;
  font-weight: 600;
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

.img-fluid {
  max-width: 100%;
  height: 711px;
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
// import helper from "../services/helper.js";
import ROUTER from "../router";
import AUTH from "../services/auth";
export default {
   props: {
    source: String
  },
  name: "login",
  auth: AUTH,
  data() {
    return {
     
        email: "",
        password: ""
      
    }
  },
  methods: {

      // e.preventDefault();
      // console.log(e);
      // let user = AUTH.login(this.email, this.password);
      // if (this.email == sessionStorage.getItem && this.password ==sessionStorage.getItem) {
      //   alert("provide inputs!!!")
      // }else if(this.email === "Admin@gmail.com" && this.password === "Admin"){
      //     ROUTER.push("/pageadmin");
      // }else{
      //  ROUTER.push('/mainpage')
      // }
      // }methods:{
      login(){
         let user = AUTH.login(this.email, this.password);
        helper.login(this.username, this.password).then(resp=>{
          if(resp.data.status){
            this.$router.push('/reserved');
          }else{
            alert(resp.data.sms)
          }
        })
      
      },
  

      // e.preventDefault();
      // helper.login(this.email, this.password).then(resp => {
      //   if (resp.data.status) {
      //     ROUTER.push("/reserved");
      //   } else {
      //     alert(resp.data.sms);
      //   }
      // });
    
    register() {
      ROUTER.push("/register");
    }
    }
};
</script>
