<template>
  <div class="container">
    <div class="card">
      <div class="card-header text-center">
        <h1>Add Department</h1>
      </div>
      <div class="card-body">
        <form @submit.prevent="addDept">
          <div class="form-group">
            <p>Current Department ID: {{ id }}</p>
            <label>Department Name</label>
            <input type="text" 
                    class="form-control" 
                    placeholder="Name"
                    v-model="name">
          </div>
          <div class="form-row">
            <div class="form-group col-sm-4">
              <label>Treatment 1: </label>
              <input type="text" 
                      class="form-control" 
                      placeholder="Treatment 1"
                      v-model="treatment1.name">
            </div>
            <div class="form-group col-sm-4">
              <label>Price: </label>
              <input type="text" 
                      class="form-control" 
                      placeholder="Price"
                      v-model="treatment1.price">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-sm-4">
              <label>Treatment 2: </label>
              <input type="text" 
                      class="form-control" 
                      placeholder="Treatment 1"
                      v-model="treatment2.name">
            </div>
            <div class="form-group col-sm-4">
              <label>Price: </label>
              <input type="text" 
                      class="form-control" 
                      placeholder="Price"
                      v-model="treatment2.price">
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Add</button>
          <div class="alert alert-success m-3" v-if="success">Added Successfully</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {testDb} from '../../firebase-db.js';

  export default {
    data() {
      return {
        name: '',
        treatment1: {
          name: '',
          price: 0
        },
        treatment2: {
          name: '',
          price: 0
        },
      }
    },
    computed: {
      id() {
        return this.$store.getters.deptId;
      },
      success() {
        return this.$store.getters.success;
      }
    },
    watch: {
      name: function() {
        this.$store.dispatch('successFalse');
      }
    },
    created() {
      this.$store.dispatch('loadDeptId');
      const key = testDb.push().key;
      const path = '/' + key + '/testing';
      testDb.update({
        path: true
      })
    },
    methods: {
      addDept() {
        const data = {
          deptId: this.id,
          dept: {
            deptName: this.name,
            treatments: [
              {
                treatmentName: this.treatment1.name,
                treatmentPrice: this.treatment1.price
              },
              {
                treatmentName: this.treatment2.name,
                treatmentPrice: this.treatment2.price
              }
            ]
          } 
        };
        this.$store.dispatch('addDept', data);
      }
    }

  };
</script>

<style>
</style>
