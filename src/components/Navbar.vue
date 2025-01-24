<template>
  <header>
    <nav class="flex justify-between items-center relative">
      <div>
        <img class="h-[31.38px]" src=".././assets/img/Logo 1.png" alt="logo" />
      </div>
      <NavList class="hidden md:flex space-x-4 justify-between items-center" />
      <div v-if="isLoggedIn">
        <LoggedInSide></LoggedInSide>
      </div>
      <div v-else>
        <MainButton
          @click="loginWithOAuth"
          class=" self-baseline md:block bg-lightBlue text-darkBlue"
        >
          Log In
        </MainButton>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useAuthStore } from "@/stores";
import LoggedInSide from "./home/LoggedInSide.vue";
import MainButton from "./MainButton.vue";
import NavList from "./NavList.vue";
import { ref, onMounted } from "vue";

const authStore = useAuthStore();

const isLoggedIn = ref(false); 

onMounted(() => {
  if (localStorage.getItem("access_token")) { 
    isLoggedIn.value = true;
  } else { 
    isLoggedIn.value = false;
  }
});

const loginWithOAuth = () => {
  authStore.loginWithOAuth();
  if (localStorage.getItem("access_token")) {
    isLoggedIn.value = true;
  }
};
</script>
