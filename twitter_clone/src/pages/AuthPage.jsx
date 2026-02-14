import { Row, Col, Image, Button, Modal, Form} from "react-bootstrap";
import { useState } from "react";
import axios from "axios";


export default function AuthPage() {
    const loginImage = "https://sig1.co/img-twitter-1";
    const url = "http://localhost:3000";
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url}/signup`, 
                { username, password});
        console.log(response.data);
        }
        catch (err) {
            console.error(err);
        }
    }
    
    return (
        <Row>
            <Col sm={6}>
                <Image src={loginImage} fluid />
            </Col>
            <Col sm={6} className="p-4">
                <i className="bi bi-twitter" style={{ fontSize:50, color: "dodgerblue"}}></i>

                <p className="mt-5" style={{ fontSize: 64 }}>Happening Now</p>
                <h2 className="my-5" style={{ fontSize: 31 }}>Join Twitter Today</h2>

                <Col sm={5} className="d-grid gap-2">
                <Button className="rounded-pill" variant="outline-dark">
                    <i className="bi bi-google"></i> Sign up with Google
                </Button>
                <Button className="rounded-pill" variant="outline-dark">
                    <i className="bi bi-apple"></i> Sign up with Apple
                </Button>
                <p style={{ textAlign: "center"}}>or</p>
                <Button className="rounded-pill" onClick={handleShow}>
                    Create an account
                </Button>
                <p style={{ fontSize: "12px"}}>
                    By signing up, you agree to the Terms of Service and Privacy Policy including Cookie use.
                </p>

                <p className="mt-5" style={{ fontWeight: "bold" }}>
                    Already have an account?
                </p>
                <Button className="rounded-pill" variant="outline-primary">Sign in</Button>
                </Col>
            </Col>
            <Modal show={show} centered>
                <Modal.Body>
                    <h2 className="mb-4" style={{ fontWeight: "bold"}}>
                        Create your account
                    </h2>
                    <Form className="d-grid gap-2 px-5" onSubmit={handleSignUp}>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Control 
                            type="Email" 
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)} 
                            />
                        </Form.Group>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password" 
                                    placeholder="Password"
                                />
                            </Form.Group>
                        </Form>
                        <p style={{ fontSize: "12px"}}>
                            By signing up, you agree to the Terms of Service and Privacy Policy including Cookie use.
                        </p>
                        <Button className="rounded-pill" type="submit">Sign up</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Row>
    );
}
