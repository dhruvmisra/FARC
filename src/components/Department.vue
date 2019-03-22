<template>
  <div class="container">
    <h1 class="text-center my-3">{{ department.deptName }}</h1>
    <hr>
    <div class="card text-center my-2">
      <h5 class="card-header bg-dark text-white">Treatments in this department</h5>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col" style="width: 60%">Treatment Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="treatment in department.treatments" :key="treatment.treatmentName">
              <td>{{ treatment.treatmentName }}</td>
              <td>{{ treatment.treatmentPrice }}</td>
            </tr>
          </tbody>
        </table>
    </div>
    <br>
    <div class="card text-center my-2">
      <h5 class="card-header bg-dark text-white">Hospitals with this department</h5>
        <div class="row mx-auto">
          <div class="card col-xs-12 col-sm-6 col-lg-4 my-2"
                v-for="hospital in hospitals"
                :key="hospital.hId">
              <img :src="require('../assets/health.png')" alt="Hospital Image" class="card-img-top">
              <div class="card-body">
                <h4 class="card-title mt-4">{{ hospital.hId }}: {{ hospital.hName }} </h4>
                <div class="card-text"> {{ hospital.address }}</div>
                <small>Ph. {{ hospital.contact }}</small> <br>
                <small class="card-text text-secondary">
                  <div class="fa fa-location-arrow"></div>
                  Directions: <a :href="hospital.link" target="_blank">Google Maps</a> 
                </small>
              </div>
              <div class="card-footer bg-success text-center text-white">Beds Available</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import {DeptsDB, HospitalsDB} from '../firebase-db.js';

  export default {
    data() {
      return {
          department: {},
          id: parseInt(this.$route.params.id, 10),
          hospitals: []
        }
    },
    computed: {
        depts() {
            return this.$store.getters.depts;
        }
    },
    created() {
      //this.$store.dispatch('loadDepts');
      this.initializeDept();
      this.initializeHospitals();
  
    },
    methods: {
      initializeDept() {
        DeptsDB.orderByChild('deptId').equalTo(this.id).once('value', snap => {
          const depts = snap.val();
          const key = Object.keys(depts);
          this.department = depts[key].dept;
        });
      },
      initializeHospitals() {
        HospitalsDB.on('value', snap => {
          snap.forEach(child => {
            const hospital = child.val();
            for(let deptId in hospital.depts) {
              if(hospital.depts[deptId] == this.id) {
                this.hospitals.push(hospital);
                break;
              }
            }
          })
        });
      }
    }

  };
</script>

<style>
</style>
