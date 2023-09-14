<script setup>
  import { useRoute, useRouter } from 'vue-router';
  import { baseURL, getData, postData } from '../../api';
  import { ref, onMounted } from 'vue';
  import { store } from '../../store';
  const route = useRoute();
  const router = useRouter();
  const eventData = ref([]);

  let count = ref(0);
  const bookTickets = async() => {
    await postData('/event/booktickets/' + route.params.id, {
      "ticketcount":count.value
    })
    router.push('/');
  }

  onMounted(async()=> {
    if (!store.logedIn) {
      router.push('/login');
    }
    const data = await getData('/event/'+route.params.id);
    eventData.value = data.data
  })
  
</script>

<template>
<section class="p-5 bg-white mt-5 " >
    <div v-if="eventData" class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black vh-50" style="border-radius: 25px;">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-4 d-flex align-items-center order-1 order-lg-1 justify-content-center justify-content-lg-start">
                    <img :src=" baseURL + '/static/file_uploads/event/'+route.params.id+'.jpeg'" style="height:300px; width:300px;" class="img-fluid" alt="Sample image">
                </div>

                <div class="col-md-10 col-lg-6 col-xl-8 order-2 order-lg-2 ">
  
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">{{eventData.name}}</p>
  
                    <div class="d-flex flex-row align-items-center mb-4">
                      <div class="desc">{{eventData.description}}</div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4 justify-content-center">
                      <span class=" h5 mx-1">Remaining Tickets Available : </span>
                      <span class=" h5" id="ticket-rem"><b id="ticket-remaining"> {{eventData.currentcapacity}} </b></span>
                    </div>
                    
                    <div class="d-flex flex-row align-items-center justify-content-center mb-4">
                            <div class="tickets mx-2 h5">Number of Tickets: </div>
                            <div class="ticket-display mx-2 h5" ><b id="tickets_no">{{count}}</b></div>
                            <div class="ticket-count mx-2 h5">
                              <button @click="count--;" class="btn btn-danger btn-md px-3 mx-2 my-2" :class="{'d-none':count == 0}" id="increment">-</button>
                              <button @click="count++;" class="btn btn-primary btn-md px-3 mx-2 my-2" id="decrement">+</button>
                            </div>
                    </div>

                   
                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button @click="bookTickets()" class="btn btn-md btn-success register-btn" :class="{'disabled':count ==  0}" id="book-button">Book Tickets</button>
                      <input type="hidden" name="ticketcount" id="ticketcount" value="5">
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </template>