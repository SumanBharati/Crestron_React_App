import { configureStore } from "@reduxjs/toolkit";
import pageViewSlice from "./pageViewSlice";
import displaySlice from "./displaySlice";

const appStore = configureStore({
    reducer: {
        pageview: pageViewSlice,
        display: displaySlice,
    }
});

export default appStore;