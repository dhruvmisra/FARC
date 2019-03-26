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
    <br>
    <div class="card text-center my-2">
      <h5 class="card-header bg-dark text-white">Doctors of this department</h5>
        <div class="card-body">
          <app-doctor-grid :doctors="doctors"></app-doctor-grid>
        </div>
    </div>
  </div>
</template>

<script>
  import {DeptsDB, HospitalsDB, DoctorsDB} from '../firebase-db.js';
  import HospitalGrid from './hospital/HospitalGrid'
  import DoctorGrid from './doctor/DoctorGrid'

  export default {
    components: {
      'app-hospital-grid': HospitalGrid,
      'app-doctor-grid': DoctorGrid
    },
    data() {
      return {
          department: {},
          id: parseInt(this.$route.params.id, 10),
          hospitals: [],
          doctors: []
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
      this.initializeDoctors();
  
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
        HospitalsDB.once('value', snap => {
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
      },
      initializeDoctors() {
        DoctorsDB.orderByChild('deptId').equalTo(this.id).once('value', snap => {
          const docs = snap.val();
          const keys = Object.keys(docs);
          let i;
          for(let key in keys) {
            i = keys[key];
            this.doctors.push(docs[i]);
          }
        });
      }
    }

  };
</script>

<style>
</style>
