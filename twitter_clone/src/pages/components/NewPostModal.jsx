import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { savePost } from "./features/posts/postSlice";



export default function NewPostModal({show,handleClose}) {
    const [postContent, setPostContent] = useState("");
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(savePost(postContent));
        handleClose();
        setPostContent("");
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Body closeButton></Modal.Body>
                    <Modal.Body>
                        <Form.Group controlId="postContent">
                            <Form.Control
                                placeholder="What is happening?"
                                as="textarea"
                                rows={3}
                                onChange={(e) => setPostContent(e.target.value)}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            className="rounded-pill"
                            onClick={handleSave}
                        >
                            tweet
                        </Button>
                    </Modal.Footer>
                </Modal.Header>
            </Modal>
                    
        </>
    )
}