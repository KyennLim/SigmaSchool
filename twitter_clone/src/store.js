import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./pages/components/features/posts/postSlice";

export default configureStore({
    reducer: {
        posts: postsReducer,
    }
})