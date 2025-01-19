import { configureStore } from "@reduxjs/toolkit";
import { getAllPizzasReducer } from "./reducers/pizzaReducers";

const store = configureStore({
  reducer: {
  getAllPizzasReducer: getAllPizzasReducer,
  }
});

export default store;
