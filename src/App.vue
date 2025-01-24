<template>
  <ScrollTextVue></ScrollTextVue>
  <div class="container mx-auto p-6">
    <router-view></router-view>
  </div>
  <main></main>
  <Footer></Footer>
</template>

<script setup>
import ScrollTextVue from "./components/ScrollText.vue";
</script>
