import { createSlice } from "@reduxjs/toolkit";

const pageViewSlice = createSlice({
  name: "pageview",
  initialState: {
    isAVRoutingViewOpen: true,
    isConferencingViewOpen: false,
  },
  reducers: {
    setAVRoutingView: (state) => {
      state.isAVRoutingViewOpen = true;
      state.isConferencingViewOpen = false;
    },
    setConferencingView: (state) => {
        state.isAVRoutingViewOpen = false;
        state.isConferencingViewOpen = true;
    },
  },
});
export const { setAVRoutingView, setConferencingView } = pageViewSlice.actions;

export default pageViewSlice.reducer;
