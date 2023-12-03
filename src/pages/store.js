import { configureStore } from "@reduxjs/toolkit";
import activeModalReducer from "../redux/activeSlice";

export const store = configureStore({
  reducer: {
    activeModal: activeModalReducer,
  },
});
