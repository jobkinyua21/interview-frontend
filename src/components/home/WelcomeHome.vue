<template>
  <div
    v-if="user"
    className="banner-bg lg:mt-[32.8px] mt-[1px] w-full lg:h-full h-[100vh] lg:px-[32px] px-3 py-[30px] rounded-[12px]"
  >
    <div className="flex flex-col gap-y-[8px] text-white">
      <span className="lg:text-[32px] text-[28px] leading-[38.73px] font-[600] capitalize">
        Welcome back, {{ capitalizeFirstLetter(user?.first_name) }}
        {{ capitalizeFirstLetter(user?.last_name) }}
      </span>
      <span className="font-[300px] lg:text-[21px] text-[18px] leading-[25.41px]">
        Shop from our  massive catalogue of backpacks for various seasons and
        moods
      </span>
      <span>
        <MainButton class="self-baseline md:block bg-darkBlue">
          Browse Products
        </MainButton>
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import MainButton from "../MainButton.vue";
import { useAuthStore } from "@/stores";

const authStore = useAuthStore();
const user = computed(() => authStore.user);

function capitalizeFirstLetter(str) {
  if (!str) return "";
  return str
    ?.split(" ")
    ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    ?.join(" ");
}
</script>

<style scoped>
.banner-bg {
  background-image: url("../../assets/img/welcomeRec.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
}
</style>
 