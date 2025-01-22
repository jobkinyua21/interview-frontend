<template>
  <div class="relative bg-lightGray w-full rounded-lg mt-[32px]">
    <div class="flex items-center">
      <div class="flex-1 gap-y-[8px] lg:px-[85px] px-3 w-full">
        <h4
          class="text-darkBlue font-bold uppercase leading-[24.2px] text-[20px]"
        >
          {{ slides[currentSlide].subtitle }}
        </h4>
        <h1 class="text-[48px] font-bold leading-[58.08px]">
          {{ slides[currentSlide].title }}
        </h1>
        <p class="font-[400] text-[19.1px] leading-[23.11px]">
          {{ slides[currentSlide].description }}
        </p>

        <span>
          <MainButton
            class="self-baseline md:block bg-darkBlue text-white mt-[8px]"
          >
            Shop Now
          </MainButton>
        </span>

        <div class="mt-[67px] transform flex space-x-3">
          <button
            v-for="(slide, index) in slides"
            :key="index"
            @click="currentSlide = index"
            :class="[
              'w-3 h-3 rounded-full',
              currentSlide === index ? 'bg-blue-700' : 'bg-blue-300',
            ]"
          ></button>
        </div>
      </div>

      <div class="">
        <img
          :src="slides[currentSlide].image"
          alt="Backpack"
          class="rounded-lg w-full h-[500px] object-contain"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import group2 from "../assets/img/Group 2.png";

const slides = ref([
  {
    title: "Happy Camper",
    subtitle: "Sonic Backpacks",
    description:
      "Comfort inside a fun-sized backpack, suitable for road trips and camp outings",
    image: group2,
  },
  {
    title: "Urban Explorer",
    subtitle: "City Backpacks",
    description: "Sleek and stylish backpacks for everyday city adventures.",
    image: group2,
  },
]);

const currentSlide = ref(0);

import MainButton from "./MainButton.vue";
</script>

<style scoped></style>
