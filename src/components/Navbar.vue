<template>
  <header>
    <nav class="flex justify-between items-center relative">
      <button
      @click="toggleMenu"
      class="md:hidden block text-darkBlue mr-[5px]"
      aria-label="Toggle Menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
      <div>
        <img class="h-[31.38px]" src=".././assets/img/Logo 1.png" alt="logo" />
      </div>
 
    <NavList
    v-if="isMenuOpen || windowWidth >= 768"
    class="absolute top-16 left-0 md:static md:flex space-x-4 justify-between items-center bg-white md:bg-transparent w-full md:w-auto"
  /> 
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
import { ref, onMounted,onBeforeUnmount } from "vue";

const authStore = useAuthStore();

const isLoggedIn = ref(false); 
const isMenuOpen = ref(false);
const windowWidth = ref(window?.innerWidth);

 
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth; 
  if (windowWidth.value >= 768) {
    isMenuOpen.value = false;
  }
};

const loginWithOAuth = () => {
  authStore.loginWithOAuth();
  if (localStorage.getItem("access_token")) {
    isLoggedIn.value = true;
  }
};

onMounted(() => {
  if (localStorage.getItem("access_token")) { 
    isLoggedIn.value = true;
  } else { 
    isLoggedIn.value = false;
  }
  window.addEventListener("resize", updateWindowWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWindowWidth);
});

</script>

<script> 
export default {
  name: "HeaderComponent",
};
</script>
