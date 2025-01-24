<template>
  <div class="scroll-banner">
    <div class="scroll-text">
      <span v-for="(promo, index) in promotions" :key="index">
        {{ promo }}
        <img
          :src="lineImg"
          alt="line"
          class="inline-block align-middle mx-[16px]"
        />
      </span>
    </div>
  </div>
</template>

<script>
import line from "../assets/img/Line 1.png";

export default {
  data() {
    return {
      promotions: [
        "20% SITEWIDE PROMO",
        "PROMO CODE VALUE45",
        "20% SITEWIDE PROMO",
        "PROMO CODE  VALUE45",
        "20% SITEWIDE PROMO",
      ],
      lineImg: line,
    };
  },
};
</script>

<style>
.scroll-banner {
  overflow: hidden;
  white-space: nowrap;
  background-color: #000;
  color: #fff;
  height: 47px;
  display: flex;
  align-items: center;
}

.scroll-text {
  display: inline-block;
  animation: scroll-left 20s linear infinite;
}

@keyframes scroll-left {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

img {
  height: 2px;
}
</style>
