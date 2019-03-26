<template>
  <div class="container">
    <div class="card">
      <div class="card-header text-center">
        <h1>Doctors</h1>
      </div>
      <div class="card-body">
        <app-doctor-grid :doctors="doctors"></app-doctor-grid>
      </div>
    </div>
  </div>
</template>

<script>
  import DoctorGrid from '../doctor/DoctorGrid';

  export default {
    components: {
      'app-doctor-grid': DoctorGrid
    },
    data() {
      return {
          
        }
    },
    computed: {
        doctors() {
            return this.$store.getters.doctors;
        }
    },
    created() {
        this.$store.dispatch('loadDoctors');
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
