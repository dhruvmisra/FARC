<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background: black">
    <router-link to="/" tag="a" class="navbar-brand" style="font-size: 30px">FARC</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Hospitals<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Doctors</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Laboratories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {

  }
</script>

<style>
</style>
