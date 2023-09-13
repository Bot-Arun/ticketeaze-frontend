<script setup>
    import { onMounted, ref } from 'vue';
    import { getData,postData } from '../../api';
    let venues = ref([])
    onMounted(async()=>{
        venues.value = (await getData('/venue/all')).data
    })

    async function deleteVenue (id) {
        venues.value = (await postData('/remove/venue/' + id)).data
    }
</script>
<template>
          <section class="bg-secondary-subtle p-5">
        <div class=" container-lg py-5">
          <h4 class="text-center my-3 pb-3">List of Venues</h4>
          <div class="d-flex justify-content-center ">
            <div class="w-75 w-100">
              <div class="card rounded-3 shadow">
                <div class="card-body p-4">
                  <div class="d-flex p-2">
                    <div class="s-no col-3 px-3 font-weight-bold"><b>S.No</b></div>
                    <div class="task text-xl col-5"><b> Venue Name </b></div>
                    <div class="title "><b> Actions </b></div>
                    <div class="buttons col-2 d-md-flex justify-content-md-center ">
                    </div>
                  </div>
                 
                  <div v-for="i in venues" class="d-flex p-2">
                    <div class="s-no col-3 px-3 col-sm-3 col-2" name="venue_id">{{ i.id }}</div>
                    <div class="task text-xl col-md-5 col-sm-5 col-5">{{ i.name }} </div>
                    <div class="buttons ">
                        <button  @click="deleteVenue(i.id)" type="submit" class="btn px-md-2 px-sm-0 btn-danger d-md-block d-none">Remove The Venue</button>
                        <button @click="deleteVenue(i.id)" class="btn btn-md btn-danger d-md-none d-block">Remove</button>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>