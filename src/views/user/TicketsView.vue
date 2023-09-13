<script setup>
    import { ref,onMounted } from 'vue';
    import { baseURL, getData } from '../../api';
    let tickets = ref([]);


    onMounted( async() => {
        tickets.value = (await getData ('/myorders')).bookings; 
        console.log(tickets.value)
    })

</script>

<template>
<section v-for="ticket in tickets" class="p-5 bg-white mt-5 " >
    <div  class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black vh-50" style="border-radius: 25px;">
            <div class="card-body p-md-5">
                <h1 class="text-center mb-4">Tickets</h1>
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-7 col-xl-5 d-flex align-items-center order-1 order-lg-1 justify-content-center justify-content-lg-start">
                    <img :src=" baseURL + '/static/file_uploads/event/'+ticket.show_id+'.jpeg'" style="height:400px; width:500px;" class="img-fluid" alt="Sample image">
                </div>

                <div class="col-mdHeading-10 col-lg-5 col-xl-7 order-2 order-lg-2 ">
  
                  <p class="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4">{{ticket.name}}</p>
                    <div class="d-flex flex-row align-items-center mb-3 justify-content-center">
                      <span class="ticket_price h5 mx-1">Booking ID : </span>
                      <span class="ticket_price_val h5" id="ticket-price-val"><b>{{ ticket.id }}</b></span>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-3 justify-content-center">
                        <span class="ticket_price h5 mx-1">Show ID : </span>
                        <span class="ticket_price_val h5" id="ticket-price-val"><b> {{ticket.show_id}}</b></span>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-3 justify-content-center">
                        <span class="ticket_price h5 mx-1">Number of Tickets  : </span>
                        <span class="ticket_price_val h5" id="ticket-price-val"><b> {{ticket.ticket_count}} </b></span>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-3 justify-content-center">
                        <span class="ticket_price h5 mx-1">Total Ticket Price : </span>
                        <span class="ticket_price_val h5" id="ticket-price-val"><b>₹ {{ticket.total_price}} </b></span>
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