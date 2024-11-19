import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((state) => state.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
    toogleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
