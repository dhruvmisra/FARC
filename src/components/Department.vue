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
        <div class="card-body">
          <app-hospital-grid :hospitals="hospitals"></app-hospital-grid>
        </div>
    </div>
  </div>
</template>

<script>
  import {DeptsDB, HospitalsDB} from '../firebase-db.js';
  import HospitalGrid from './hospital/HospitalGrid'

  export default {
    components: {
      'app-hospital-grid': HospitalGrid
    },
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
