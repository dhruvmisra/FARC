<template>
    <div class="parallax">
        <div class="jumbotron">
            <div class="container text-white">
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <h1 class="display-4">Frequent <br> Appointment <br> Rapid Cure</h1>
                    <p class="lead">Booking appointments, simplified.</p>
                </div>
            </div>
        </div>
        <div class="container features">
            <div class="row" style="font-size: 1.5em;">
                <div class="card border-0 mx-auto col-md-12 col-lg-4"
                        v-for="feature in features"
                        :key="feature.text">
                    <div class="card-body text-center">
                        <div class="fas fa-8x" :class="feature.icon"></div>
                        <div class="card-body">{{ feature.text }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid departments">
            <div class="card bg-transparent border-0 text-center">
                <div class="card-header bg-transparent dept-header d-flex align-items-center justify-content-center">
                    <h1 class="card-title text-white">Departments</h1>
                </div>
                <div class="card-body section">
                    <div class="container">
                        <div class="card-columns">
                            <router-link :to="'/dept/' + dept.deptId" 
                                            tag="div"
                                            class="card rounded-pill selection my-2"
                                            v-for="dept in depts"
                                            :key="dept.deptId">
                                <div class="card-body">{{ dept.dept.deptName }}</div>
                            </router-link>
                        </div>
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
                features: [
                    {
                        text: 'Unified Appointment Booking',
                        icon: 'fa-calendar-check'
                    },
                    {
                        text: 'Central Database for All',
                        icon: 'fa-database'
                    },
                    {
                        text: 'Doctor Recommendation System',
                        icon: 'fa-user-md'
                    },
                ]
            }
        },
        created() {
            this.$store.dispatch('loadDepts');
        },
        computed: {
            depts() {
                return this.$store.getters.depts;
            }
        },
    }
</script>

<style>
    .jumbotron {
        background: none;
        background-size: cover;
        width: 100%;
        height: 450px; 
    }
    .parallax {
      background-image: url('../assets/jumbo.jpg');
      height: 450px;
      background-attachment: fixed;
      background-position: center;
      background-size: cover;
    }

    .features {
        color: #000000;
        height: fit-content;
    }

    .section {
        background-color: #f7f7f7;
        height: fit-content;
    }
    .departments {
        background-image: url('../assets/departments.jpg');
        height: 250px;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
    }
    .dept-header {
        height: 250px;
        text-shadow: 1px 1px black;
    }

    .selection:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
    .selection:active {
        transform: scale(1);
        cursor: pointer;
    }
</style>
