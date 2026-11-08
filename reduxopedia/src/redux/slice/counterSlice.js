import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOPedia } from "../actions/actions";
const initialState = { count: 15 };

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
    // resetCounter: (state, action) => {
    //   state.count = 15;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(resetReduxOPedia, (state) => {
      state.count = 15;
    });
  },
});

export const { increment, decrement, incrementMultiple, decrementMultiple } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
