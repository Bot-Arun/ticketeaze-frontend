<script setup>
    import { onMounted, ref } from 'vue';
    import { getData, postData } from '../../api';
    import { useRouter } from 'vue-router';

    let venues = ref([])
    let name = ref('')
    let eventType = ref('')
    let shortDesc = ref('')
    let price = ref(0)
    let capacity = ref(0)
    let tags = ref('')
    let description = ref('')
    let venue = ref('')
    let imageInputRef = ref(null);
 
    const router = useRouter();
    async function addEvent() {
        const formData = new FormData();
        formData.append('event_img', imageInputRef.value.files[0]);
        formData.append('name', name.value);
        formData.append('eventType', eventType.value);
        formData.append('shortDesc', shortDesc.value);
        formData.append('price', price.value);
        formData.append('capacity', capacity.value);
        formData.append('tags', tags.value);
        formData.append('description', description.value);
        formData.append('venue', venue.value);

        const data = await postData('/add/event', formData, {
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
        venues.value = (await getData('/venue/all')).data;
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
      
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add a New Event</p>
    
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <div class="form-label" for="form3Example1c">Event Type</div>
                            <select v-model="eventType" class="dropdown rounded-3 p-1" name="event_type" id="event_type">
                              <option value="--select--"> --Select--</option>
                              <option value="Movie">Movie</option>
                              <option value="Comedy Show">Comedy Show</option>
                              <option value="Music Concert">Music Concert</option>
                            </select>
                          </div>
                        </div>
                        
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example1c">Event Name</label>
                            <input v-model="name" type="text" name="event_name" class="form-control" placeholder="Event Name" required/>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example3c">Short Description</label>
                            <textarea v-model="shortDesc" type="textarea" name="event_short_desc" class="form-control" placeholder="Event Description in 20 Letters" required></textarea>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example3c">Event Description</label>
                            <textarea v-model="description" type="textarea" name="event_desc" class="form-control" placeholder="Event Description" required></textarea>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example3c">Tags</label>
                            <textarea v-model="tags" type="textarea" name="event_tags" class="form-control" placeholder="Tags" required></textarea>
                          </div>
                        </div>


                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example3c">Event Venue</label>
                            <br>
                            <select v-model="venue" class="dropdown rounded-3 px-3 py-1" name="event_venue" id="event_venue">
                              <option value="--select--"> --Select--</option>
                              <option v-for="i in venues" :value="i.id">{{i.name}}</option>
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
                            <input v-model="price" type="number" name="event_price" class="form-control" placeholder="Ticket Price(In Rs.)"/>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example3c">Capacity</label>
                            <input v-model="capacity" type="number" name="event_capacity" class="form-control" placeholder="Event Capacity"/>
                          </div>
                        </div>
      
                        
      
                        
      
                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" class="btn btn-success btn-md register-btn" @click="addEvent()" >Add Event</button>
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