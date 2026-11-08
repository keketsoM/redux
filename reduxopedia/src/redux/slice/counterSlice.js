import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 10 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementMultiple: (state, action) => {
      state.count += Number(action.payload);
    },
    decrementMultiple: (state, action) => {
      state.count -= Number(action.payload);
    },
    resetCount: (state, action) => {
      state.count = 10;
    },
  },
});

export const { increment, decrement, incrementMultiple, decrementMultiple,resetCount } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
