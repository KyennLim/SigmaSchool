import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {apple:5},
    reducers: {
        sellApple: (state, action) => {
            state.apple -= action.payload;
        },
        restockApple: (state, action) => {
            state.apple +=  action.payload;
        },
    },
});

export const { sellApple } = cartSlice.actions;
export const { restockApple } = cartSlice.actions;

export default cartSlice.reducer;