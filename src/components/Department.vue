<template>
  <div class="container">
    <div class="card">
      <div class="card-header text-center">
        <h1>Hospitals</h1>
      </div>
      <div class="card-body">
          <div class="card-deck">
              <div class="card col-md-3"
                    v-for="hospital in hospitals"
                    :key="hospital.hId">
                  <img :src="require('../../assets/health.png')" alt="Hospital Image" class="card-img-top">
                  <div class="card-body">
                    <h4 class="card-title mt-4">{{ hospital.hName }} </h4>
                    <div class="card-text"> {{ hospital.address }}</div>
                    <small>Ph. {{ hospital.contact }}</small> <br>
                    <small class="card-text text-secondary">
                      <div class="fa fa-location-arrow"></div>
                      Directions: <a :href="hospital.link" target="_blank">Google Maps</a> 
                    </small>
                  </div>
                  <div class="card-footer bg-success text-center text-white">Available</div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          
        }
    },
    computed: {
        hospitals() {
            return this.$store.getters.hospitals;
        }
    },
    created() {
        this.$store.dispatch('loadHospital');
    },
    methods: {
        image(gender) {
          if(gender = 'male') {
            return 'male.png';
          } else {
            return '../../assets/female.png';
          }
        }
    }

  };
</script>

<style>
</style>
