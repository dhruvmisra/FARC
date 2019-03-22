<template>
    <div class="card d-inline-block col-xs-12 col-sm-6 col-lg-4">
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
      <div class="card-footer bg-success text-center text-white">Beds Available</div>
    </div>
</template>

<script>
  export default {
      props: ['hospital']
  }
</script>

<style scoped>

</style>

