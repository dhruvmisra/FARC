<template>
    <div class="container">
      <br><br>
      <div class="card border-0">
        <div class="row">
          <img :src="require(`../assets/${doctor.gender}.png`)" 
                alt="Doctor Image" 
                class="rounded-circle d-inline-block mx-auto my-2"
                style="width: 15em; height: 15em">
          <div class="card d-inline-block mx-auto col-md-12 col-lg-9">
            <div class="card-body row mx-auto">
              <!-- Doctor info -->
              <div class="info mb-2 col-xs-12 col-sm-8 col-md-9">
                <h2 class=""> {{ doctor.firstName | dr }} {{ doctor.lastName }} </h2>
                <div class=""> {{ doctor.designation }} </div>
                <div class=""> {{ doctor.hName }} </div>
                <br><br>
                <div class="card-text">
                  Qualification: {{ doctor.qualification }} <br>
                  Experience: {{ doctor.experience }}+ years
                </div>
              </div>
              <!-- Rating -->
              <div class="card text-center text-muted mt-3 mx-auto">
                <div class="card-body">
                  <div class="card-title">Rating</div>
                  <h1 class="card-text"> {{ doctor.rating }} </h1>
                  <div class="rating">
                    <span class="far fa-star" :class="{ fas: doctor.rating >= 1 }"></span>
                    <span class="far fa-star" :class="{ fas: doctor.rating >= 2 }"></span>
                    <span class="far fa-star" :class="{ fas: doctor.rating >= 3 }"></span>
                    <span class="far fa-star" :class="{ fas: doctor.rating >= 4 }"></span>
                    <span class="far fa-star" :class="{ fas: doctor.rating >= 5 }"></span>
                  </div>
                </div>
              </div>

              <!-- <button class="btn btn-primary" @click="fixDoctors">Fix</button> -->
              <!-- <button class="btn btn-primary" @click="fixHospitals">Fix</button> -->
            </div>
          </div>
        </div>
      </div>

      <div class="card my-2 ml-auto col-sm-12 col-md-6 ">
        <div class="card-body">
          <table class="table table-hover table-striped text-center">
            <thead>
              <tr>
                <h4 scope="col">Book Appointment</h4>
              </tr>
            </thead>
            <tbody>
              <tr v-for="day in doctor.available"
                  :key="day">
                <td> {{ day }} </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
</template>

<script>
  import {DoctorsDB, HospitalsDB, TestDB} from '../firebase-db';

  export default {
      data() {
        return {
          doctor: {},
          id: parseInt(this.$route.params.id, 10),
        }
      },
      created() {
        this.initializeDoctor();
      },
      methods: {
        initializeDoctor() {
          DoctorsDB.orderByChild('dId').equalTo(this.id).once('value', snap => {
            const snapshot = snap.val();
            const key = Object.keys(snapshot);
            const doc = snapshot[key[0]];

            HospitalsDB.orderByChild('hId').equalTo(doc.hId).once('value', snap => {
              const snapshot = snap.val();
              const key = Object.keys(snapshot);
              const hosp = snapshot[key[0]];
              doc.hName = hosp.hName;
              this.doctor = doc;
            });
          });
        }
        // code used to fix firebase string entries to int
        // fixDoctors() {
        //   for(let i=2; i<=177; i++) {
        //     DoctorsDB.orderByChild('dId').equalTo(i).on('value', snap => {
        //       const snapshot = snap.val();
        //       const key = Object.keys(snapshot);
        //       const obj = snapshot[key[0]];
        //       const location = DoctorsDB.child(key[0]);
        //       console.log(obj);
        //       obj.deptId = parseInt(obj.deptId, 10);
        //       obj.experience = parseInt(obj.experience, 10);
        //       obj.hId = parseInt(obj.hId, 10);
        //       obj.rating = parseInt(obj.rating, 10);
        //       console.log(obj);
        //       location.update(obj);
        //     })
        //   }
        // }

        // fixHospitals() {
        //   for(let i=0; i<=19; i++) {
        //     HospitalsDB.orderByChild('hId').equalTo(i).on('value', snap => {
        //       const snapshot = snap.val();
        //       const key = Object.keys(snapshot);
        //       const obj = snapshot[key[0]];
        //       const location = HospitalsDB.child(key[0]);
        //       console.log(obj);
        //       obj.beds = parseInt(obj.beds, 10);
        //       console.log(obj);
        //       location.update(obj);
        //     })
        //   }
        // }
      }
  }
</script>

<style>
  .rating {
    color: orange;
  }
</style>

