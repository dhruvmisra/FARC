<template>
  <div class="container-fluid">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header';

  export default {
    components: {
      'app-header': Header
    }
  }
</script>

<style>
    .container-fluid {
        padding-right:0;
        padding-left:0;
        margin-right:auto;
        margin-left:auto
    }

</style>
