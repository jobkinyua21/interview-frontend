<template>
  <div v-if="user" className="banner-bg mt-[32.8px] w-full lg:h-full h-[100vh] px-[32px] py-[30px] rounded-[12px]">
    <div className="flex flex-col gap-y-[8px] text-white">
      <span className="text-[32px] leading-[38.73px] font-[600] capitalize">
        Welcome back, {{ capitalizeFirstLetter(user?.first_name) }} {{ capitalizeFirstLetter(user?.last_name) }}
      </span>
      <span className="font-[300px] text-[21px] leading-[25.41px]">
        Shop from our massive catalogue of backpacks for various seasons and moods
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
import { computed, onMounted } from 'vue'; 
import MainButton from '../MainButton.vue';
import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
const user = computed(() => authStore.user);
 
function capitalizeFirstLetter(str) {
  if (!str) return '';
  return str
    ?.split(' ')
    ?.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    ?.join(' ');
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

<!-- <template>
  <div className="banner-bg mt-[32.8px] w-full lg:h-full h-[100vh] px-[32px] py-[30px] rounded-[12px]">
    <div className="flex flex-col gap-y-[8px] text-white">
      <span className="text-[32px] leading-[38.73px] font-[600] capitalize ">
        Welcome back, {{ capitalizeFirstLetter(user?.first_name)   }}  {{capitalizeFirstLetter(user?.last_name)}}
      </span>
      <span className="font-[300px] text-[21px] leading-[25.41px]">
        Shop from our massive catalogue of backpacks for various seasons and moods
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
import { ref, onMounted } from 'vue';
import MainButton from "../MainButton.vue";

 
const user = ref({});

 
onMounted(() => {
  const userData = localStorage.getItem('user'); 
  if (userData) {
    user.value = JSON.parse(userData);
  }
});

function capitalizeFirstLetter(str) {
  if (!str) return '';  
  return str
    ?.split(' ')             
    ?.map(word =>             
      word.charAt(0).toUpperCase() + word?.slice(1)?.toLowerCase()  
    )
    ?.join(' ');            
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

  -->