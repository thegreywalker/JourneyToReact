import React from "react";
import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from './authSlice';

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };
//     case "decrement":
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };
//     case "increase":
//       return {
//         counter: state.counter + action.payload,
//         showCounter: state.showCounter,
//       };
//     case "toggle":
//       return {
//         showCounter: !state.showCounter,
//         counter: state.counter,
//       };
//   }
//   return state;
// };

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
