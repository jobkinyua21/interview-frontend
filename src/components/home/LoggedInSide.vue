<template>
  <div class="flex items-center justify-between p-4">
    <div class="flex items-center space-x-4">
      <button class="bg-darkBlue w-[56px] h-[56px] p-4 flex items-center justify-center rounded-full">
        <img class="h-[24px] w-[24px]" src="../../assets/img/search-line.png" alt="search" />
      </button>

      <button class="bg-darkBlue w-[56px] h-[56px] p-4 flex items-center justify-center rounded-full">
        <img class="h-[24px] w-[24px]" src="../../assets/img/cart.png" alt="cart" />
      </button>

      <div className="flex items-center gap-x-[8px]">
      <img class="w-[56px] h-[56px]" src="../../assets/img/userImg.png" alt="userImg" /> 
      <div class="relative">
        <button @click="toggleDropdown" class="p-2 rounded-full">
          <img src="../../assets/img/IconDrop.png" alt="User" class="w-4 h-4 rounded-full" />
        </button>
        <div v-if="isDropdownOpen" class="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-48">
          <div class="px-4 py-2 text-gray-700">Logged in as {{ username }}</div>
          <div class="border-t"></div>
          <button @click="logout" class="block px-4 py-2 text-red-600 hover:bg-gray-100 w-full text-left">Logout</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      username: "John Doe",
      price: "232.86 Huf x 57.2 Huf",
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    logout() {
      alert("Logged out!");
    },
    handleClickOutside(event) {
      const dropdown = this.$el.querySelector(".relative");
      if (dropdown && !dropdown.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style scoped>
</style>
