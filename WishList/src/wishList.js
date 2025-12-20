import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./wishListSlice"

const wishList = configureStore({
    reducer: {
        wishList: wishListReducer,
    },
});

export default wishList;