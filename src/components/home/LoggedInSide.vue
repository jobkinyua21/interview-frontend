<template>
  <div class="flex items-center justify-between lg:p-4 p-2">
    <div class="flex items-center gap-x-4">
      <button
        class="bg-darkBlue lg:w-[56px] w-[30px] lg:h-[56px] h-[30px] lg:p-4 p-1 lg:flex lg:ml-0 ml-10 items-center justify-center rounded-full"
      >
        <img
          class="h-[24px] w-[24px] object-contain"
          src="../../assets/img/search-line.png"
          alt="search"
        />
      </button>

      <button
      class="bg-darkBlue lg:w-[56px] w-[30px] lg:h-[56px] h-[30px] lg:p-4 p-1 lg:flex items-center justify-center rounded-full relative"
    >
      <img
        class="h-[24px] w-[24px] object-contain"
        src="../../assets/img/cart.png"
        alt="cart"
      />
      <span
        class="absolute top-[-8px] right-[-8px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
      >
        {{ cartItemCount }}
      </span>
    </button>

      <div class="flex items-center lg:gap-x-[8px] gap-x-1">
        <img
          class="lg:w-[56px] w-[30px] lg:h-[56px] h-[30px]"
          src="../../assets/img/userImg.png"
          alt="userImg"
        />
        <div class="relative">
          <button @click="toggleDropdown" class="lg:p-2 p-0 rounded-full">
            <img
              src="../../assets/svg7.svg"
              alt="User"
              class="lg:w-8 w-10 lg:h-8 h-10 rounded-full"
            />
          </button>
          <div
            v-if="isDropdownOpen"
            class="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-52"
          >
            <div class="px-4 py-2 text-gray-700">
              Logged in as {{ capitalizeFirstLetter(user?.first_name) }}
              {{ capitalizeFirstLetter(user?.last_name) }}
            </div>
            <div class="border-t"></div>
            <div class="px-4 py-2 text-gray-700">
              Email : {{ user?.email}}
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
import { useAuthStore, useCartStore } from "@/stores";

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
    cartItemCount() {
      const cartStore = useCartStore();
      return cartStore?.items?.length;
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
          (word) =>
            word?.charAt(0).toUpperCase() + word?.slice(1)?.toLowerCase()
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
