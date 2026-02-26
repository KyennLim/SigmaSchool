import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:3000";

// Async thunk for fetching a user's posts
export const fetchPostsByUser = createAsyncThunk(
    "posts/fetchByUser",
    async (userId, thunkAPI) => {
        const response = await fetch(`${BASE_URL}/posts/user/${userId}`);
        return response.json();
    }
);

// Slice
const postsSllice = createSlice({
    name: "posts",
    initialState: { posts: [], loading: true },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPostsByUser.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.loading = false;
        });
    }
})

export default postsSllice.reducer;