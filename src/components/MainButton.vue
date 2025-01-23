<template>
  <button
    @click="handleClick"
    class="hover:shadow-md shadow-brightRedLight py-[10px] px-4 rounded-full font-[500] text-[14px] w-auto"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>
