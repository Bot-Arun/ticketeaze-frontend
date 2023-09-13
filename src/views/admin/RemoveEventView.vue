<script setup>
    import { onMounted, ref } from 'vue';
    import { getData, postData } from '../../api';
    
    let events = ref(0);
    onMounted(async()=> {
        events.value = (await getData('/event/all')).data ;
    })

    async function deleteEvent(id) {
        events.value = (await postData('/remove/event/' +id) ).data;
    }
</script>

<template>
          <section class="bg-secondary-subtle p-5">
        <div class=" container-lg py-5">
          <h4 class="text-center my-3 pb-3">List of Events</h4>
          <div class="d-flex justify-content-center ">
            <div class="w-75 w-100">
              <div class="card rounded-3 shadow">
                <div class="card-body p-4">
                  
                 

                  <div class="d-flex p-2">
                    <div class="s-no col-3 px-3 font-weight-bold"><b>S.No</b></div>
                    <div class="task text-xl col-5"><b> Event Name </b></div>
                    <div class="title "><b> Actions </b></div>
                    <div class="buttons col-2 d-md-flex justify-content-md-center ">
                    </div>
                  </div>
                  <div v-for="i in events" class="d-flex p-2">
                    <div class="s-no col-3 px-3 col-sm-3 col-2">{{ i.id }} </div>
                    <div class="task text-xl col-md-5 col-sm-5 col-5">{{i.name}}</div>
                    <div class="buttons ">
                        <button  @click="deleteEvent(i.id)" class="btn px-md-2 px-sm-0 btn-danger d-md-block d-none">Remove The Event</button>
                        <button @click="deleteEvent(i)" class="btn btn-md btn-danger d-md-none d-block">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

</template>