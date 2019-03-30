<template>
    <div class="row justify-content-center">
      <app-hospital-card v-for="hospital in hospitals"
                          :key="hospital.hId"
                          :hospital="hospital"
                          class="col-xs-12 col-sm-6 col-lg-3 m-3">
      </app-hospital-card>
    </div>
</template>

<script>
  import HospitalCard from './HospitalCard'

  export default {
      components: {
        'app-hospital-card': HospitalCard
      },
      props: ['hospitals']
  }
</script>

<style>

</style>

