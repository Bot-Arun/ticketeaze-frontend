<script setup>
  import { onMounted, ref } from 'vue';
  import { getData ,postData } from '../../api';
  import { useRoute ,useRouter} from 'vue-router';
  let route = useRoute();
  let  venue = ref({
    id:0,
    name:'',
    venuetype:'',
    city:'',
    pincode:'',
    capacity:0,
  });

  let imageInputRef = ref(null);
  const router = useRouter();
  async function editVenue() {
    const formData = new FormData();
    formData.append('venue_img', imageInputRef.value.files[0]);
    formData.append('venue_name', venue.value.name);
    formData.append('venue_type', venue.value.venuetype);
    formData.append('venue_capacity', venue.value.capacity);
    formData.append('venue_location', venue.value.city);
    formData.append('venue_pincode', venue.value.pincode);
    const data = await postData('/edit/venue/'+route.params.id, formData, {
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
        venue.value = (await getData('/venue/'+route.params.id)).data
        console.table(venue.value)
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
      
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Edit Your Venue Details</p>
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <div class="form-label" for="form3Example1c">Venue Type</div>
                           
                            <select v-model="venue.venuetype" class="dropdown rounded-3 p-1 mx-2" name="venue_type" id="venue_type">
                              <option value="Outdoor" :selected="venue.venuetype=='Outdoor'">Outdoor</option>
                              <option value="Indoor" :selected="venue.venuetype=='Indoor'">Indoor</option>
                            </select>
                          </div>
                        </div>
                        
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example1c">Venue Name</label>
                            <input type="text" name="venue_name" class="form-control" placeholder="Venue Name" v-model="venue.name"  required/>
                          </div>
                        </div>
                        
                      <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example3c">Venue Location</label>
                            <input type="text" name="venue_location" class="form-control" placeholder="Venue Location" v-model="venue.city" required/>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example1c">Venue Pincode</label>
                            <input type="text" name="venue_pincode" class="form-control" placeholder="Venue Pincode" v-model="venue.pincode" required/>
                          </div>
                        </div>
                        
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example3c">Venue Photo</label>
                            <input ref="imageInputRef" type="file" name="venue_img" class="form-control" required @change="handleImageUpload" />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example3c">Capacity</label>
                            <input type="number" name="venue_capacity" class="form-control" placeholder="Venue Capacity" v-model="venue.capacity" />
                          </div>
                        </div>
      
                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button @click="editVenue()" type="submit" class="btn btn-success btn-md register-btn">Edit Venue</button>
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