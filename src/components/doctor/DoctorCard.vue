<template>
  <div class="card d-inline-block m-2">
      <div class="card-body">
        <img :src="require(`../../assets/${doctor.gender}.png`)" alt="Doctor image" class="card-img-top">
        <router-link :to="'/doctor/' + doctor.dId"
                      tag="h4"
                      class="card-title mt-4 link"
                      style="cursor: pointer">
                      {{ doctor.firstName | dr }} {{ doctor.lastName }}
        </router-link>
        <div class="card-text">{{ doctor.designation }}</div>
        <div class="card-text">{{ hName }}</div>
        <small>Qual: {{ doctor.qualification }}</small> <br>
        <small class="card-text text-secondary">Rating: {{ doctor.rating }}</small>
      </div>
      <div class="card-footer bg-success text-center text-white">Available</div>
  </div>
</template>

<script>
  import {DeptsDB, HospitalsDB} from '../../firebase-db.js';

  export default {
      props: ['doctor'],
      created() {
        this.completeInfo();
      },
      data() {
        return {
          hName: ''
        }
      },
      methods: {
        completeInfo() {
          HospitalsDB.orderByChild('hId').equalTo(parseInt(this.doctor.hId, 10)).once('value', snap => {
            const hosp = snap.val();
            const key = Object.keys(hosp);
            this.hName = hosp[key].hName;
          });
        }
      }
  }
</script>

<style scoped> 

</style>

