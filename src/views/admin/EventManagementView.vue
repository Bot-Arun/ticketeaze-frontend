<script setup>
import { baseURL } from '../../api';
</script>
<template>
      <section class="p-lg-5 p-2 mt-4 mt-lg-1">
        <h1 class="text-center">Event Management</h1>
      </section>

      <section class="p-lg-5 p-2">
        <div class="container-md h-100 d-sm-flex justify-content-sm-center align-items-sm-center">

          <div class="row p-3 justify-content-between ">

            <div class="card-container col-lg-4 my-3">
                <RouterLink to="/add/event" class="link link-dark text-decoration-none">
                <div class="card p-lg-3 p-md-2 p-sm-2 p-1">
                  <img :src=" baseURL+ '/static/Images/add-event-img.jpg'" alt="Image 1" class="card-img-top rounded-1">
                  <div class="card-body">
                    <h4 class="card-title text-center">Add a New Event</h4>
                    
                  </div>
                </div> 
              </RouterLink>
            </div>

            <div class="card-container col-lg-4  my-3">
                <RouterLink to="/edit/event" class="link link-dark text-decoration-none">
                    <div class="card p-lg-3 p-md-2 p-sm-2 p-1">
                        <img :src=" baseURL + '/static/Images/edit2-event-img.jpg'" alt="Image 1" class="card-img-top rounded-1">
                        <div class="card-body">
                            <h4 class="card-title text-center">Edit Event Details</h4>
                    
                        </div>
                    </div> 
                </RouterLink>
            </div>

            <div class="card-container col-lg-4  my-3">
                <RouterLink to="/remove/event/" class="link link-dark text-decoration-none">
                    <div class="card p-lg-3 p-md-2 p-sm-2 p-1">
                        <img :src=" baseURL + '/static/Images/remove-event-img.jpg'" alt="Image 1" class="card-img-top rounded-1">
                        <div class="card-body">
                            <h4 class="card-title text-center">Remove an Event</h4>
                    
                        </div>
                    </div> 
                </RouterLink>
            </div>

          </div>
        </div>
      </section>
</template>