<script setup lang="js">
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <NavBar></NavBar>
  <!-- <div class="container" style="padding: 50px 0 100px 0">
    <AccountView v-if="session" :session="session" />
    <AuthView v-else />
  </div> -->
    <div class=" min-vh-100">
      <router-view ></router-view>
    </div>
  <Footer></Footer>
</template>

<style scoped></style>
