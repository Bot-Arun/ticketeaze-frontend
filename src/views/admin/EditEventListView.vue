<script setup>
  import { onMounted, ref } from 'vue';
  import {baseURL, getData} from '../../api'
  let events = ref([]);
  onMounted(async()=>{
    events.value = (await getData('/event/all')).data;
  })
</script>

<template>
    <section class="w-100  bg-white p-5">
    <div class="container">
      <div class="row py-3">
        <div v-for="event in events" class="col-md-6 col-lg-4 col-xl-3 my-md-2 my-sm-2">
          <div class="card">
            <img :src=" baseURL+ '/static/file_uploads/event/'+event.id+'.jpeg'"  style="height:250px;" alt="Image 1" class="card-img-top">
            <div class="card-body">
              <h4 class="card-title">{{event.name}}</h4>
              <RouterLink :to="'/edit/event/'+ event.id" class="btn btn-primary">Edit Details</RouterLink>
            </div>
          </div>
        </div>
    </div>
    </div>
  </section>
</template>


