<template>
    <div class="row">
      <app-hospital-card v-for="hospital in hospitals"
                          :key="hospital.hId"
                          :hospital="hospital"
                          class="mx-auto col-xs-12 col-sm-6 col-lg-4">
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

