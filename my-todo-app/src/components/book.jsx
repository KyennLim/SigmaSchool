import { useDispatch, useSelector } from "react-redux";
import { addBook, removeBook } from "../bookSlice";
import { useState } from "react";
import { Row, Col,  Button } from "react-bootstrap";

const BookComponent = () => {
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("not-started");
    const books = useSelector((state) => state.books.books);
    const dispatch = useDispatch();

    return (
        <div className="container flex-column align-items-center justify-content-center">
            <Row className="mb-3">
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
            </Row>
            <Col md={4} className="mb-3">
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
                <Button
                    onClick={() => {
                        dispatch(addBook({ id: Date.now() + books.length, title , readingStatus: status }));
                        setTitle("");
                        setStatus("not-started");
                    }}
                >
                    Add Book
                </Button>
            </Col>
        </div>
    )
};

export default BookComponent;