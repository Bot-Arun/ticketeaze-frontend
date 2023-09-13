<script setup>

import { baseURL } from '../../api';
</script>
<template>
<section class="p-5 ">
        <div class="container-sm h-100 d-sm-flex justify-content-sm-center align-items-sm-center">

          <div class="row p-3 justify-content-between ">

            <div class="card-container col-lg-5 my-3">
                <RouterLink to="/admin/events" class="link link-dark text-decoration-none">
                <div class="card p-lg-3 p-md-2 p-sm-1 p-1">
                  <img :src=" baseURL+ '/static/Images/event-manage-pic.jpg'" alt="Image 1" class="card-img-top">
                  <div class="card-body">
                    <h4 class="card-title text-center">Event Management</h4>
                   
                  </div>
                </div> 
            </RouterLink>
              </div>

            <div class="card-container col-lg-5 my-3">
            <RouterLink to="/admin/venues" class="link link-dark text-decoration-none">
                <div class="card p-lg-3 p-md-2 p-sm-1 p-1">
                  <img :src=" baseURL + '/static/Images/venue2-manage-pic.jpg'" alt="Image 1" class="card-img-top">
                  <div class="card-body">
                    <h4 class="card-title text-center">Venue Management</h4>
                    
                  </div>
                </div> 
              </RouterLink>
              </div>

          </div>
        </div>
      </section>
</template>

     