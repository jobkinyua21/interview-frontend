<template>
  <header>
    <nav class="flex justify-between items-center relative">
      <div>
        <img className="h-[31.38px]"  src=".././assets/img/Logo 1.png" alt="logo" /> 
      </div>
      <NavList class="hidden md:flex space-x-4 justify-between items-center" />
      <div v-if="isLoggedIn">
        <LoggedInSide></LoggedInSide>
      </div>
      <div v-else>
        <MainButton class="hidden self-baseline md:block bg-lightBlue text-darkBlue">
          Log In
        </MainButton>
      </div>
    </nav>
  </header>
  </template>

  <script setup>

import LoggedInSide from "./home/LoggedInSide.vue";
import MainButton from "./MainButton.vue"; 
import NavList from "./NavList.vue";  
</script>

<script>
export default {
  data() {
    return {
      isLoggedIn: true, 
    };
  },
  methods: { 
  },
  
};
</script>