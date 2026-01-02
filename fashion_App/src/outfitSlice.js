import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    outfits: [],
};

const outfitSlice = createSlice({
    name: "outfit",
    initialState: initialState,
    reducers: {
        addOutfit: (state, action) => {
            state.outfits.push(action.payload);
        }
    }
});

export const { addOutfit } = outfitSlice.actions;
export default outfitSlice.reducer;