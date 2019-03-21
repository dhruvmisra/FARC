<template>
  <div class="container">
    <div class="card">
      <div class="card-header text-center">
        <h1 @click="show">Departments</h1>
      </div>
      <div class="card-body row">
          <div class="card col-md-5 mx-auto"            
                v-for="dept in depts"
                :key="dept.deptId">
                <div class="card-body">
                  <div class="card-text">{{ dept.deptId }}: {{ dept.dept.deptName }}</div>
                  <strong class="card-text">Treatments:</strong>
                  <div class="card-text" 
                        v-for="treatment in dept.dept.treatments" 
                        :key="treatment.treatmentName"
                        >{{ treatment.treatmentName }} - <small>Rs. {{ treatment.treatmentPrice }}</small></div>
                </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          
        }
    },
    computed: {
        depts() {
            return this.$store.getters.depts;
        }
    },
    created() {
        this.$store.dispatch('loadDepts');
    },
    methods: {
        show() {
            console.log(this.depts);
        }
    }

  };
</script>

<style>
</style>
