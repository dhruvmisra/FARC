<template>
  <div class="container">
    <div class="card">
      <div class="card-header text-center">
        <h1>Doctors</h1>
      </div>
      <div class="card-body">
          <div class="row">
              <div class="card col-md-3"
                    v-for="doctor in doctors"
                    :key="doctor.DId">
                  <div class="card-body">
                    <img :src="require(`../../assets/${doctor.gender}.png`)" alt="Doctor image" class="card-img-top">
                    <h4 class="card-title mt-4">{{ doctor.firstName | dr }} {{ doctor.lastName }} </h4>
                    <div class="card-text"> {{ doctor.designation }} ({{ doctor.deptId }})</div>
                    <small>{{ doctor.qualification }}</small> <br>
                    <small class="card-text text-secondary">Rating: {{ doctor.rating }}</small>
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
