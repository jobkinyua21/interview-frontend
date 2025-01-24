import { defineStore } from 'pinia';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: [],
  }),
  actions: {
    addToCart(product) {
      const existingProductIndex = this.items.findIndex(
        (item) => item?.title === product?.title
      );
      if (existingProductIndex >= 0) {
        this.items[existingProductIndex].quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart(productTitle) {
      this.items = this.items?.filter((item) => item?.title !== productTitle);
    },

    clearCart() {
      this.items = [];
    },
  },
});
