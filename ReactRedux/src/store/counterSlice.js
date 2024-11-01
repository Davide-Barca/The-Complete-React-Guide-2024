import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    increase(state, action) {
      console.log(action);
      state.value = state.value + action.payload.newValue;
    },
    toogleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSlice;
export const counterActions = counterSlice.actions;
