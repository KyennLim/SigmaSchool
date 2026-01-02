import { configureStore } from "@reduxjs/toolkit";
import outfitReducer from "./outfitSlice";

const store = configureStore({
    reducer: {
        outfit: outfitReducer,
    },
});

export default store;