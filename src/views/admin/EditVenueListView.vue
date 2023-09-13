<script setup>
    import { onMounted, ref } from 'vue';
    import {baseURL, getData} from '../../api'
    let venues = ref([]);
    onMounted(async()=>{
        venues.value = (await getData('/venue/all')).data;
        console.log(venues.value)
    })
</script>

<template>
    <section class="w-100  bg-white p-5">
    <div class="container">
      <div class="row py-3">
        <div v-for="i in venues" class="col-md-6 col-lg-4 col-xl-3 my-md-2 my-sm-2">
          <div class="card">
            <img :src=" baseURL+ '/static/file_uploads/venue/'+i.id+'.jpeg'" style="height:250px;" alt="Image 1" class="card-img-top">
            <div class="card-body">
              <h4 class="card-title">{{i.name}}</h4>
              <RouterLink :to="'/edit/venue/'+i.id" class="btn btn-primary">Edit Details</RouterLink>
            </div>
          </div>
        </div>
    </div>
    </div>
  </section>
</template>