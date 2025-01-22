<template>
    <div className="flex flex-col gap-y-[11px] w-full items-center justify-center mt-[32.36px]">
        <span className="text-black1 font-[600] text-[64.1px] leading-[77.56px]">Welcome to Pike Store</span>
        <span className="text-[18.1px] font-[400] leading-[21.9px]">Your one-stop shop for everything chic, comfortable, affordable and fashionable</span>
        <span>
            <MainButton class="hidden self-baseline md:block bg-darkBlue text-white ">
             Browse Products
              </MainButton> 
        </span>
       
    </div>
  </template>

  <script setup>
  import MainButton from "./MainButton.vue";
  </script>