import { createSlice } from "@reduxjs/toolkit";

const displaySlice = createSlice({
  name: "display",
  initialState: {
    isDisplayLeftOn: true,
    isDisplayRightOn: true,
  },
  reducers: {
    setDisplayLeftOn: (state) => {
      state.isDisplayLeftOn = true;
    },
    setDisplayLeftOff: (state) => {
      state.isDisplayLeftOn = false;
    },
    setDisplayRightOn: (state) => {
      state.isDisplayRightOn = true;
    },
    setDisplayRightOff: (state) => {
      state.isDisplayRightOn = false;
    },
  },
});

export const { setDisplayLeftOn, setDisplayLeftOff,setDisplayRightOn, setDisplayRightOff } =
  displaySlice.actions;

export default displaySlice.reducer;
