<template>
  <div class="container">
    <div class="card">
      <div class="card-header text-center">
        <h1>Add Hospital</h1>
      </div>
      <div class="card-body">
        <form @submit.prevent="addHospital">
          <p>Current Hospital ID: {{ id }}</p>
          <div class="form-group">
            <label>Name</label>
            <input type="text" 
                    class="form-control" 
                    placeholder="Name"
                    v-model="name">
          </div>
          <div class="form-group">
            <label>Address</label>
            <input type="text" 
                    class="form-control" 
                    id="inputAddress" 
                    placeholder="1234 Main St"
                    v-model="address">
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label>Contact</label>
              <input type="number" 
                      class="form-control" 
                      placeholder="Number"
                      v-model="contact">
            </div>
            <div class="form-group col-md-4">
              <label>Number of beds</label>
              <input type="number" 
                      class="form-control" 
                      placeholder="Beds"
                      v-model="beds">
            </div>
          </div>
          <div class="form-group">
            <label>Google Map Link</label>
            <input type="text" 
                    class="form-control" 
                    placeholder="Link"
                    v-model="link">
          </div>
          <div class="form-group">
            <div>DeptIDs: </div>
            <div class="form-check form-check-inline" v-for="n in totalDepts" :key="n">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox1" :value="n-1" v-model="depts">
              <label class="form-check-label" for="inlineCheckbox1">{{ n-1 }}</label>
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
  export default {
    data() {
      return {
        name: '',
        address: '',
        contact: null,
        beds: null,
        link: '',
        depts: [],
      }
    },
    computed: {
      id() {
        return this.$store.getters.hId;
      },
      success() {
        return this.$store.getters.success;
      },
      totalDepts() {
        this.$store.dispatch('loadDeptId');
        return this.$store.getters.deptId;
      }
    },
    watch: {
      name: function() {
        this.$store.dispatch('successFalse');
      }
    },
    created() {
      this.$store.dispatch('loadHId');
    },
    methods: {
      addHospital() {
        this.$store.dispatch('loadHId');
        const data = {
          hId: this.id,
          hName: this.name,
          address: this.address,
          contact: this.contact,
          beds: this.beds,
          bedsFilled: 0,
          link: this.link,
          depts: this.depts,
        };
        this.$store.dispatch('addHospital', data);
      }
    }

  };
</script>

<style>
</style>
