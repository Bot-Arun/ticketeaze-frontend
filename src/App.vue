<script setup>
import { onMounted, ref } from 'vue'
import {store} from './store'
import { RouterLink, RouterView ,useRouter } from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import jwt_decode from 'jwt-decode';
const router = useRouter();
const name = ref('')

function logout(route) {
  try {
    localStorage.removeItem('token');
    store.logedIn =false;
    store.admin = false ;
  }
  catch (error) {
    console.log(error);
  }
  router.push(route);
}
const token = localStorage.getItem('token') ;
if (token) {
  const jwt =  jwt_decode(token) ;
  store.admin = jwt.is_admin ;
  store.name = jwt.name;
  if (Date.now() < jwt.exp * 1000) {
    store.logedIn = true;
  }
  else {
    store.logedIn = false;
    store.admin = false;
  }
}
</script>

<template>
<div v-if="!store.admin">
 <nav class="navbar navbar-expand-xxl navbar-light bg-light p-4 shadow ">
    <div class="navbar-brand " href="#">TicketEaze</div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div  class="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active d-block d-lg-none" >
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item active d-block d-lg-none" >
            <a class="nav-link" href="#">Location</a>
        </li>
        <li class="nav-item active d-block d-lg-none" >
            <a class="nav-link" href="#">Sign In</a>
        </li>
        <li class="nav-item d-block d-lg-none">
          <a class="nav-link" href="#">Contact</a>
        </li> 
        <li class="list-unstyled mx-3 d-lg-block  d-none">
            <div class="dropdown">
              <button type="button" class="btn btn-danger dropdown-toggle " data-bs-toggle="dropdown" >
              Location</button>
              <ul class="dropdown-menu ">
                  <li><a class="dropdown-item" href="#">Chennai</a></li>
                  <li><a class="dropdown-item" href="#">Mumbai</a></li>
                  <li><a class="dropdown-item" href="#">Delhi</a></li>
                  <li><a class="dropdown-item" href="#">Kolkata</a></li>
              </ul> 
            </div>
        </li>
        <div v-if=" store.logedIn" >
            <li class="list-unstyled mx-3 d-lg-block  d-none">
                <div class="dropdown">
                    <button type="button" class="btn btn-secondary dropdown-toggle " data-bs-toggle="dropdown" >
                        Profile</button>

              <ul class="dropdown-menu ">
                  <li class="dropdown-item"><b>Hi ! {{ store.name }}</b></li>
                  <li><RouterLink class="dropdown-item" to="/myorders">My Orders</RouterLink></li>
                  <li><a class="dropdown-divider" href="#"></a></li>
                  <li><a class="dropdown-item" @click="logout('/login')"  href="#">Logout</a></li>
              </ul>
              
          </div>
      </li>
    </div>
    <div v-else>
        
        <li class="mx-3 list-unstyled d-lg-block  d-none">
              <div class="dropdown">
                  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" >
                      Sign In</button>
                      
                      <ul class="dropdown-menu ">
                          <li><RouterLink class="dropdown-item" to="/login">User</RouterLink></li>
                          <li><RouterLink class="dropdown-item" to="/admin/login">Admin</RouterLink></li>
                          <li><hr class="dropdown-divider"></li>
                          <li><RouterLink class="dropdown-item" to="/register">New User</RouterLink></li>
                          
                        </ul>
                        
                    </div>  
                </li>
            </div>
                
            </ul>
        </div>
    </nav>
    
<!-- dsfsdfsd -->
</div>
<div v-else >
    <nav class="navbar navbar-expand-lg navbar-light bg-light p-4 shadow ">
    <div class="navbar-brand " href="#">TicketEaze</div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active d-block d-lg-none" >
          <a class="nav-link" href="#">Home</a>
        </li>
        
        <li class="nav-item active d-block d-lg-none" >
            <a @click="logout('/admin/login')" class="nav-link" href="#">Log Out</a>
        </li>
        
        
        <div v-if="store.logedIn" >

            <li class="pt-2 nav-item d-none d-lg-block">Hello,{{ store.name }} !</li>
            <li class="list-unstyled mx-3 d-lg-block  d-none">
                <button type="button" class="btn btn-secondary" @click="logout('/admin/login')">Log Out</button>
            </li>
        </div>
      </ul>
    </div>
  </nav>
</div>
    
    <RouterView/>
</template>

