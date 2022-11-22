<template>
    <div  class="bg-gradient-primary">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 col-lg-12 col-xl-10">
            <div class="card shadow-lg o-hidden border-0 my-5">
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg-6 d-none d-lg-flex">
                    <div class="flex-grow-1 bg-login-image">
                      <img id="img" alt="Vue logo" src="@/assets/Fotos/login.webp" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="p-5">
                      <div v-if="msg" id="alert" class="alert alert-danger d-flex justify-content-center align-items-center" role="alert">
                        {{ msg }}
                      </div>
                      <div class="text-center">
                        <h4 class="text-dark mb-4">Welcome Back!</h4>
                      </div>
                      <div class="user">
                        <div class="mb-3">
                          <input
                            class="form-control form-control-user"
                            type="email"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            name="email"
                            v-model="email"
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            class="form-control form-control-user"
                            type="password"
                            id="exampleInputPassword"
                            placeholder="Password"
                            name="password"
                            v-model="password"
                          />
                        </div>
                        <div class="mb-3">
                          <div class="custom-control custom-checkbox small">
                          </div>
                        </div>
                        <button
                          class="btn btn-primary d-block btn-user w-100"
                          @click="login()"
                        >
                          Login
                        </button>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import axios from "axios";
  export default {
    name: "LoginView",
    components: {
      // HelloWorld
    },
    data() {
      return {
        email: "",
        password: "",
        response: "",
        msg: "",
      };
    },
  methods: {
      // Função para fazer o login e setar o token na session storage 
      login() {
        axios.defaults.headers.common["Authorization"] =
        "Bearer " + sessionStorage.getItem("token");
        axios
          .post(`${this.$store.state.base_url}auth/login`, {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            // console.log(response);
            sessionStorage.setItem("token", response.data.access_token);
            this.msg = ""
            this.err = ""
            this.$router.push("/home");
          })
          .catch(error => {
            console.log(error);
          if(error.response.status == 403 || error.response.status == 401){
            this.msg = "Senha ou Usuário incorretos";
          }
          });
      },
    },
  };
  </script>
  
  <style>
   .bg-gradient-primary{
  
    height: 100vh
  }
  </style>