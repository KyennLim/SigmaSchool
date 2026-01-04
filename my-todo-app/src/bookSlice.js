import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [
        { id: 1, title: "1984", readingStatus: "completed" },
        { id: 2, title: "To Kill a Mockingbird", readingStatus: "in-progress" },
        { id: 3, title: "The Great Gatsby", readingStatus: "not-started" },
    ],
};

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        removeBook: (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload);
        },
    },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;