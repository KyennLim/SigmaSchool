import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function AddTodo() {
    const [completed, setCompleted] = useState("");
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");

    return (
        <Container>
            <h1>Add Todo</h1>
            <Form>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                    value ={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Get software development job"
                    required
                    
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                    value ={description}
                    as = "textarea"
                    row = {3}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={`1. Createa an amazing project\n2. Apply to Google & Netflix\n3. Cruch Interview`}
                    required
                    />
                </Form.Group>
                <Form.Check
                    type="checkebox"
                    id="completed"
                    label="Mark as complete"
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.value)}
                    className="mb-3"
                    />
                    <Button varient="primary" type="submit">Submit</Button>
            </Form>
        </Container>
    );
}