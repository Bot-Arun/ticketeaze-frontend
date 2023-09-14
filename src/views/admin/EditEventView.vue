<script setup>
    import { onMounted, ref } from 'vue';
    import { getData ,postData } from '../../api';
    import { useRoute ,useRouter } from 'vue-router';
    let route = useRoute();
    let venues = ref([])
    let  event = ref({});
    let imageInputRef = ref(null);
    const router = useRouter();
    async function editEvent() {
        const formData = new FormData();
        formData.append('event_img', imageInputRef.value.files[0]);
        formData.append('event_name', event.value.name);
        formData.append('event_type', event.value.eventType);
        formData.append('event_short_desc', event.value.shortdescription);
        formData.append('event_price', event.value.price);
        formData.append('event_capacity', event.value.currentcapacity);
        formData.append('event_tags', event.value.tags);
        formData.append('event_desc', event.value.description);
        formData.append('event_venue', event.value.venue);

        const data = await postData('/edit/event/' + route.params.id, formData, {
            headers: {
            'Content-Type': 'multipart/form-data',
            },
        });

        if (data.status > 200) {
            alert(data.message);
        } else {
            router.push('/admin/home');
        }
    }

    function handleImageUpload(event) {
        imageInputRef.value = event.target;
    }


    onMounted(async()=>{
        event.value = (await getData('/event/'+route.params.id)).data
        console.table(event.value)
        venues.value = (await getData('/venue/all')).data 
    })

</script>

<template>
          <section class="p-5 bg-white" >
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style="border-radius: 25px;">
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-8 order-2 order-lg-1">
      
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Edit Your Event Details</p>
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <div class="form-label" for="form3Example1c">Event Type</div>
                            <select v-model="event.eventType" class="dropdown rounded-3 p-1" name="Event Type" id="event_type"> 
                              <option value="--select--"> --Select-- </option>
                              <option value="Movie" :selected="event.eventType === 'Movie' ?'true' : 'false'" >Movie </option>
                              <option value="Comedy Show" :selected="event.eventType === 'Comedy Show' ?'true' : 'false'">Comedy Show</option>
                              <option value="Music Concert" :selected="event.eventType === 'Music Concert' ?'true' : 'false'">Music Concert</option>
                            </select>
                          </div>
                        </div>
                        
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example1c">Event Name</label>
                            <input v-model="event.name" type="text" name="event_name" class="form-control" placeholder="Event Name" required/>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example3c">Event Short Description</label>
                            <textarea v-model="event.shortdescription" type="textarea" name="event_short_desc" class="form-control" placeholder="Event Short Description"  required></textarea>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example3c">Event Full Description</label>
                            <textarea v-model="event.shortdescription" type="textarea" name="event_desc" class="form-control" placeholder="Event Description"  required></textarea>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example3c">Tags</label>
                            <textarea v-model="event.tags" type="textarea" name="event_tags" class="form-control" placeholder="Tags" required></textarea>
                          </div>
                        </div>


                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example3c">Event Venue</label>
                            <br>
                            <select v-model="event.venue" class="dropdown rounded-3 px-3 py-1" name="event_venue" id="event_venue">
                              <option value="--select--"> --Select--</option>
                                <option v-for="i in venues" :value="i.id" :selected="i.id == event.venue ?'true' : 'false'"> {{i.name}}</option>
                            </select>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example3c">Event Photo</label>
                            <input ref="imageInputRef" type="file" name="event_img" class="form-control" required @change="handleImageUpload"/>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example3c">Ticket Price(In Rs.)</label>
                            <input v-model="event.price" type="number" name="event_price" class="form-control" placeholder="Ticket Price(In Rs.)" />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example3c">Capacity</label>
                            <input v-model="event.currentcapacity" type="number" name="event_capacity" class="form-control" placeholder="Event Capacity"/>
                          </div>
                        </div>
                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button @click="editEvent()" type="submit" class="btn btn-success btn-md register-btn">Edit Event</button>
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