import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: 'wishList',
    initialState: ["to live a life"],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
        clearWishList: () => {
            return [];
        },
    },
});

export const { addItem } = wishListSlice.actions;
export const { clearWishList } = wishListSlice.actions;

export default wishListSlice.reducer;