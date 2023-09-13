<script setup>
defineProps({
})
import {onMounted, ref} from 'vue'   
import { getData ,baseURL } from '../../api';
  let events = ref([])
  onMounted(async()=> {
    const data = await getData('/home');
    events.value = data.events;
  })

</script>

<template>
<div class="position-fixed top-0 end-0 p-3" style="z-index: 11">
  <div id="success-alert" class="alert alert-success alert-dismissible fade show" role="alert">
    slkfalksd jflkasdj flkasdj flkasdjflk 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</div>
<section class="w-100  bg-white p-5">
  <div id="carouselExampleCaptions" class="carousel slide w-75 m-auto">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="baseURL+'/static/Images/img1.png'" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img :src="baseURL+'/static/Images/img2.jpg'" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img :src="baseURL+'/static/Images/img1.png'" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
</section>
      <!-- <form action="/event/booktickets" method="post"> -->
<section class="w-100  bg-white p-5">
  <div class="container">
    <div class="flex-row d-flex flex-wrap   py-3">
      
        <div v-for="i in events" class=" m-5 my-auto  col-md-6 col-lg-4 col-xl-3 ">
          <div class="card">
            <img :src=' baseURL + "/static/file_uploads/event/" + i.id +".jpeg"' style="height:250px" alt="Image 1" class="card-img-top">
            <div class="card-body">
              <h4 class="card-title">{{i.name}}</h4>
              <p class="card-text">{{i.shortdescription}}</p>
              <p class="card-text">₹{{i.price}}</p>
              <RouterLink :to="'/event/register/' +i.id" class="btn btn-primary">Book Tickets</RouterLink>
            </div>
          </div>
        </div>


  </div>
  
</div>
</section>
</template>
