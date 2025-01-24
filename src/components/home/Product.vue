<template>
  <div
    className="flex lg:flex-row flex-col  w-full gap-y-[1rem] gap-x-[10.19px] mt-[32px]"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      className=" w-full h-[595.26px] rounded-[7.64px] py-[40.75px] overflow-hidden"
      :style="{ background: item?.color }"
    >
      <div className="flex flex-col gap-y-[16.55px] lg:px-[35.65px] px-3">
        <span className="font-[600] text-[19.1px] leading-[23.11px]">
          {{ item?.title }}
        </span>
        <span className="font-[500] text-[19.1px] leading-[23.11px]">
          {{ item?.price }}
        </span>
        <span>
          <button
          @click="addToCart(item)"
            className="text-[12.73px] font-[600] leading-[15.41px] text-darkBlue uppercase"
          >
            Add to Cart
          </button>
        </span>
      </div>

      <div className="lg:px-[18.74px] px-3 w-full h-full overflow-hidden ">
        <img
          className="w-full h-full object-contain"
          :src="item?.image"
          :alt="item?.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "CARGO BACKPACKS",
          price: "KES 4,000",
          image: prod1,
          color: "linear-gradient(99.45deg, #CAC8D2 1.07%, #E9E5DE 99.14%)",
        },
        {
          title: "TRAVEL DUFFLE BAGS",
          price: "KES 6,500",
          image: prod2,
          color: "linear-gradient(99.45deg, #FAD9C5 1.07%, #E6EBEB 99.14%)",
        },
        {
          title: "LAPTOP SLEEVES",
          price: "KES 3,200",
          image: prod3,
          color: "linear-gradient(99.45deg, #F1F3FF 1.07%, #FFF4D8 99.14%)",
        },
      ],
    };
  },
  methods:{
    addToCart(product){
      const cartStore =  useCartStore()
      cartStore.addToCart(product)
    }
  }
};
import { useCartStore } from "@/stores";
import prod1 from "../../assets/img/Group 2.png";
import prod2 from "../../assets/img/prod2.png";
import prod3 from "../../assets/img/prod3.png";
</script>
