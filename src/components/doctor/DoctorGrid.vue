<template>
    <div class="row">
      <app-doctor-card v-for="doctor in doctors"
                          :key="doctor.dId"
                          :doctor="doctor"
                          class="mx-auto col-xs-12 col-sm-6 col-lg-3">
      </app-doctor-card>
    </div>
</template>

<script>
  import DoctorCard from './DoctorCard'

  export default {
      components: {
        'app-doctor-card': DoctorCard
      },
      props: ['doctors']
  }
</script>

<style>

</style>

