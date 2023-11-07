import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./Featured/Counter/CounterSlice";
import logger from "../../src/Midlewares/Logger";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
