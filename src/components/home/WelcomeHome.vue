<template>
  <div className="banner-bg mt-[32.8px] w-full lg:h-full h-[100vh] px-[32px] py-[30px] rounded-[12px]">
    <div className="flex flex-col gap-y-[8px] text-white">
      <span className="text-[32px] leading-[38.73px] font-[600] "
        >Welcome back, John Doe</span
      >
      <span className="font-[300px] text-[21px] leading-[25.41px]"
        >Shop from our massive catalogue of backpacks for various seasons and
        moods</span
      >
      <span>
        <MainButton class="self-baseline md:block bg-darkBlue">
          Browse Products
        </MainButton>
      </span>
    </div>
  </div>
</template>

<script setup>
import MainButton from "../MainButton.vue";
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
