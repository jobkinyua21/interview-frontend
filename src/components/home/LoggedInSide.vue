<template>
  <div class="flex items-center justify-between p-4">
    <div class="flex items-center space-x-4">
      <button
        class="bg-darkBlue w-[56px] h-[56px] p-4 lg:flex hidden items-center justify-center rounded-full"
      >
        <img
          class="h-[24px] w-[24px]"
          src="../../assets/img/search-line.png"
          alt="search"
        />
      </button>

      <button
        class="bg-darkBlue w-[56px] h-[56px] p-4 lg:flex hidden items-center justify-center rounded-full"
      >
        <img
          class="h-[24px] w-[24px]"
          src="../../assets/img/cart.png"
          alt="cart"
        />
      </button>

      <div class="flex items-center gap-x-[8px]">
        <img
          class="w-[56px] h-[56px]"
          src="../../assets/img/userImg.png"
          alt="userImg"
        />
        <div class="relative">
          <button @click="toggleDropdown" class="p-2 rounded-full">
            <img
              src="../../assets/svg7.svg"
              alt="User"
              class="lg:w-8 w-20 lg:h-8 h-20 rounded-full"
            />
          </button>
          <div
            v-if="isDropdownOpen"
            class="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-48"
          >
            <div class="px-4 py-2 text-gray-700">
              Logged in as {{ capitalizeFirstLetter(user?.first_name) }}
              {{ capitalizeFirstLetter(user?.last_name) }}
            </div>
            <div class="border-t"></div>
            
            <button
              @click="logout"
              class="block px-4 py-2 text-red-600 hover:bg-gray-100 w-full text-left"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores";
 
export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  computed: {
    user() {
      const authStore = useAuthStore();
      return authStore.user;
    },
  },

  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    logout() {
      const authStore = useAuthStore();
      authStore?.logout();
    },
    handleClickOutside(event) {
      const dropdown = this.$el.querySelector(".relative");
      if (dropdown && !dropdown.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    },
    capitalizeFirstLetter(str) {
      if (!str) return "";
      return str
        ?.split(" ")
        ?.map(
          (word) => word.charAt(0).toUpperCase() + word?.slice(1)?.toLowerCase()
        )
        ?.join(" ");
    },
  
  },
 
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style scoped></style>
