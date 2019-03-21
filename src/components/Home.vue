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
            <div class="card-deck" style="font-size: 1.5em;">
                <div class="card border-0">
                    <div class="card-body text-center">
                        <div class="far fa-calendar-check fa-8x text-primary"></div>
                        <div class="card-body">Unified Appointment Booking</div>
                    </div>
                </div>
                <div class="card border-0">
                    <div class="card-body text-center">
                        <div class="fas fa-database fa-8x text-warning"></div>
                        <div class="card-body">Central Database for All</div>
                    </div>
                </div>
                <div class="card border-0">
                    <div class="card-body text-center">
                        <div class="fas fa-user-md fa-8x text-success"></div>
                        <div class="card-body">Doctor Recommendation System</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid app">
            <div class="container">
                <div class="card-deck">
                    <div class="card text-white" style="font-size: 1.5em; background: none; border: none">
                        <div class="card-body mx-auto">
                            <div class="far fa-calendar-check fa-10x"></div>
                            <div class="card-body text-center">Unified Appointment Booking</div>
                        </div>
                    </div>
                    <div class="card text-white" style="font-size: 1.5em; background: none; border: none">
                        <div class="card-body">This is a feature</div>
                    </div>
                    <div class="card text-white" style="font-size: 1.5em; background: none; border: none">
                        <div class="card-body">This is a feature</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
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
        height: 50vh;
    }
    .app {
        background-color: #343A40;
        height: 50vh;
    }
    .container-fluid {
        padding-right:0;
        padding-left:0;
        margin-right:auto;
        margin-left:auto
    }
</style>
