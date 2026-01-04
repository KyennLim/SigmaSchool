import { useDispatch, useSelector } from "react-redux";
import { addBook, removeBook } from "../bookSlice";
import { useState } from "react";

const BookComponent = () => {
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("not-started");
    const books = useSelector((state) => state.books.books);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>book List</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        {book.title}
                        <button onClick={() => dispatch(removeBook(book.id))}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Book Title"
                />
                <select name="status">
                    <option value="not-started">Not Started</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <button
                    onClick={() => {
                        dispatch(addBook({ id: Date.now() + books.length, title , readingStatus: status }));
                        setTitle("");
                        setStatus("not-started");
                    }}
                >
                    Add Book
                </button>
            </div>
        </div>
    )
};

export default BookComponent;