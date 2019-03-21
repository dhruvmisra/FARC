<template>
  <div class="container">
    <div class="card">
      <div class="card-header text-center">
        <h1>Add Doctor</h1>
      </div>
      <div class="card-body">
        <form @submit.prevent="addDoctor">
          <p>Current Doctor ID: {{ id }}</p>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="fName">First Name</label>
              <input type="text" 
                      class="form-control" 
                      id="fName" 
                      placeholder="First"
                      v-model="firstName">
            </div>
            <div class="form-group col-md-6">
              <label>Last Name</label>
              <input type="text" 
                      class="form-control" 
                      id="lName" 
                      placeholder="Last"
                      v-model="lastName">
            </div>
          </div>
          <div class="form-group">
            <label>Designation</label>
            <input type="text" 
                    class="form-control" 
                    placeholder="Post"
                    v-model="designation">
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label>h_id</label>
              <input type="number" 
                      class="form-control" 
                      placeholder="Hospital ID"
                      v-model="hId">
            </div>
            <div class="form-group col-md-4">
              <label>dept_id</label>
              <input type="number" 
                      class="form-control" 
                      placeholder="Department ID"
                      v-model="deptId">
            </div>
            <div class="form-group col-md-4">
              <label>Initial rating</label>
              <input type="number" 
                      class="form-control" 
                      placeholder="Rating"
                      v-model="rating">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-10">
              <label>Qualification</label>
              <input type="text" 
                      class="form-control" 
                      placeholder="Degrees"
                      v-model="qualification">
            </div>
            <div class="form-group col-md-2">
              <label>Experience</label>
              <input type="number" 
                      class="form-control" 
                      placeholder="Years"
                      v-model="experience">
            </div>
          </div>
          <div class="form-row">
            <div class="form-check mx-2">
              <input class="form-check-input" 
                      type="radio" 
                      value="male" 
                      v-model="gender">
              <label class="form-check-label">
                Male
              </label>
            </div>
            <div class="form-check mx-2">
              <input class="form-check-input" 
                      type="radio" 
                      value="female" 
                      v-model="gender">
              <label class="form-check-label">
                Female
              </label>
            </div>
          </div>
          <br>
          <button type="submit" class="btn btn-primary">Add</button>
          <div class="alert alert-success m-3" v-if="success">Added Successfully</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        designation: '',
        hId: null,
        deptId: null,
        rating: null,
        qualification: '',
        experience: null,
        gender: 'male'
      }
    },
    computed: {
      id() {
        return this.$store.getters.dId;
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
      this.$store.dispatch('loadDId');
    },
    methods: {
      addDoctor() {
        this.$store.dispatch('loadDId');
        const data = {
          dId: this.id,
          firstName: this.firstName,
          lastName: this.lastName,
          designation: this.designation,
          hId: this.hId,
          deptId: this.deptId,
          rating: this.rating,
          qualification: this.qualification,
          experience: this.experience,
          gender: this.gender
        };
        this.$store.dispatch('addDoctor', data);
      }
    }

  };
</script>

<style>
</style>
