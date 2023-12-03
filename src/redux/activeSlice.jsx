import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeModal: false,
};

export const activeSlice = createSlice({
  name: "active",
  initialState,
  reducers: {
    setActiveModal: (state, actions) => {
      state.activeModal = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveModal } = activeSlice.actions;

export default activeSlice.reducer;
