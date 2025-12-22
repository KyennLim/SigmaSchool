import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./wishListSlice"

const store = configureStore({
    reducer: {
        store: wishListReducer,
    },
});

export default store;