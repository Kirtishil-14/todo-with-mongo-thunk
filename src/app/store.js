import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slice/todo";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
