<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router'
import { postData } from '../../api';
    const name = ref("");
    const email = ref("")
    const phonenumber = ref("")
    const dateofbirth = ref("")
    const password = ref("")
    const password2 = ref("") ;
    const disabled = ref(false)
    const router = useRouter();
    const register = async() => {
        if (password.value==password2.value) {
            const result = await postData('/register',{
                name:name.value,
                email:email.value,
                phonenumber:phonenumber.value,
                dateofbirth:dateofbirth.value,
                password:password.value,
            }) 
            console.log(result.status)
            router.push('/login')
        }
        else 
            alert('passwords are different');
    }

</script>

<template>
<section class="p-5 bg-white" >
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px;">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
  
                  <form class="mx-1 mx-md-4"  >
  
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example1c">Your Name</label>
                        <input v-model="name" type="text" name="name" class="form-control" placeholder="Your Name" required/>
                      </div>
                    </div>
  
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example3c">Your Email</label>
                        <input v-model="email" type="email" name="email" class="form-control" placeholder="Email Address" required/>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example3c">Phone Number</label>
                        <input v-model="phonenumber" type="tel" name="phonenumber" class="form-control" placeholder="Phone Number" pattern="[1-9]{1}[0-9]{9}" required/>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example3c">Date of Birth</label>
                        <input v-model="dateofbirth" type="date" name="dateofbirth" class="form-control" placeholder="Date Of Birth"/>
                      </div>
                    </div>
  
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example4c">Password</label>
                        <input v-model="password" type="password" name="password1" class="form-control" placeholder="Set Your Password" required/>
                        
                      </div>
                    </div>
  
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example4cd">Confirm your password</label>
                        <input v-model="password2" type="password" name="password2" class="form-control" placeholder="Confirm Password" required/>
                        <input class="form-check-input me-2" type="checkbox" onclick="show_password()">Show Password
                      </div>
                    </div>
  
                    <div class="form-check d-flex justify-content-center mb-5">
                      <input class="form-check-input me-2" type="checkbox" id="checkbox_id" value=""/>
                      <label class="form-check-label" for="form2Example3">
                        I agree all statements in <a href="#!">Terms of service</a>
                      </label>
                    </div>
  
                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" :class="{disbled:disabled}"  class="btn btn-secondary btn-md register-btn" @click="register()" >Register</button>
                    </div>
  
                  </form>
  
                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
  
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    class="img-fluid" alt="Sample image">
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>