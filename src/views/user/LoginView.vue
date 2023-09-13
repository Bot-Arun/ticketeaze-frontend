<script setup>
  import {ref,} from 'vue'
  import { useRouter } from 'vue-router';
  import { baseURL, postData } from '../../api';
  import { store } from '../../store';
  import jwt_decode from 'jwt-decode'
  const email = ref("")
  const pass = ref("")
  
  const router = useRouter();
  async function login() {
    try {
      const data = await postData('/login',{
        email:email.value,
        password:pass.value,
      }) 
      console.log(data,'mine')
      if(data.status >200 ) {
        alert(data.message);
        return;
      }
      localStorage.setItem('token', data.token);
      const token = data.token ;
      if (token) {
        const jwt =  jwt_decode(token) ;
        store.admin = jwt.is_admin ;
        if (Date.now() < jwt.exp * 1000) {
          store.logedIn = true;
        }
      }
      setTimeout(()=> router.push('/') ,1000)
    }
    catch (error) {
      alert(error);
    }
  }
</script>
<template>
  <section>

<div class="container p-2">
  <div class="title mt-2 ">

    <div class="text-center h1 fw-bold mx-1 mx-md-4 mt-4">User Login</div>
  </div>
</div>


</section>
<section class="p-5 bg-white" >
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px;">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">

                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img :src=" baseURL + '/static/Images/login-img.webp'" class="img-fluid" alt="Sample image">
                </div>

                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example3c">Your Email</label>
                        <input v-model="email" type="email" name="email" class="form-control" placeholder="Email Address" required/>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example4c">Password</label>
                        <input v-model="pass"  type="password" name="password" class="form-control" placeholder="Enter Your Password"  required/>
                        <input class="form-check-input me-2" type="checkbox" onclick="show_password_login()">Show Password
                      </div>
                    </div>
  
  
                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" class="btn btn-md btn-primary register-btn" @click="login()">Login</button>
                    </div>
  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

