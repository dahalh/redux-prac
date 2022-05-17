import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseCount: (state) => {
      state.count += 1;
    },
    decreaseCount: (state, action) => {
      state.count -= 1;
    },
  },
});

const { reducer, actions } = counterSlice;

export const { increaseCount, decreaseCount } = actions;

export default reducer;
