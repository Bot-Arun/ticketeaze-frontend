<script setup>
import { onMounted, ref } from 'vue';
import { baseURL, getData } from '../../api';

let bookings = ref({});
onMounted( async()=> {
    bookings.value = (await getData ('/myorders')).events; 
    console.log(bookings.value)

})

</script>

<template>
<section class="w-100  bg-white p-5">
    <div class="container">
      <div class="row py-3">
        <div v-for="event in bookings" class="col-md-6 col-lg-4 col-xl-3 my-md-2 my-sm-2">
            <div class="card">
              <img :src=" baseURL + '/static/file_uploads/event/'+event.id +'.jpeg'" style="height:250px" alt="Image 1" class="card-img-top">
              <div class="card-body">
                <h4 class="card-title">{{event.name}}</h4>
                 <RouterLink :to="'/tickets/'+event.id"><button class="btn btn-primary">View Tickets</button></RouterLink>
              </div>
            </div> 
    </div>
    </div>
    </div>
  </section>
  </template>