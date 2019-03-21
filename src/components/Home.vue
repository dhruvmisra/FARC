<template>
    <div>
        <div class="jumbotron">
            <div class="container text-white">
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <h1 class="display-4">Frequent <br> Appointment <br> Rapid Cure</h1>
                    <p class="lead">Booking appointments, simplified.</p>
                </div>
            </div>
        </div>
        <div class="container features">
            <div class="row text-dark" style="font-size: 1.5em;">
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
        <div class="container-fluid section">
            <div class="container">
                <div class="card bg-transparent border-0 text-center">
                    <div class="card-header bg-transparent">
                        <h1 class="card-title">Departments</h1>
                    </div>
                    <div class="card-body">
                        <div class="card-columns">
                            <div class="card rounded-pill selection my-2"
                                    v-for="dept in depts"
                                    :key="dept.deptId">
                                <div class="card-body">{{ dept.dept.deptName }}</div>
                            </div>
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
        }
    }
</script>

<style>
    .jumbotron {
        background: url("../assets/jumbo.jpg") no-repeat center center;
        background-size: cover;
        width: 100%;
        height: 450px; 
    }
    .features {
        height: fit-content;
    }
    .section {
        background-color: #f7f7f7;
        height: fit-content;
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
