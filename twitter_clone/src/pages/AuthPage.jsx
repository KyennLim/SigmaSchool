import { Row, Col, Image, Button, Modal, Form} from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorage from "use-local-storage";
import { useNavigate } from "react-router-dom";


export default function AuthPage() {
    const loginImage = "https://sig1.co/img-twitter-1";
    const url = "http://localhost:3000";

    // Possible values: null ( no madal shows), "login", "signUp"
    const [modalShow, setModalShow] = useState(null);
    const handleShowSignUp = () => setModalShow("signUp");
    const handleShowLogin = () => setModalShow("login");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authToken, setAuthToken] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        console.log("Checking for existing token in localStorage...");
        if (token) {
            console.log("Existing token found in localStorage, setting authToken state.");
            setAuthToken(token);
            navigate("/profile");
        }
    }, [authToken,navigate]);

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

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url}/login`, 
                { username, password});
            if (response.data && response.data.authToken === true && response.data.token) {
                setAuthToken(response.data.token);
                localStorage.setItem("authToken", response.data.token);
                console.log("Login successful, token stored saved.");
            }
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleClose = () => setModalShow(null);
    
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
                <Button className="rounded-pill" onClick={handleShowSignUp}>
                    Create an account
                </Button>
                <p style={{ fontSize: "12px"}}>
                    By signing up, you agree to the Terms of Service and Privacy Policy including Cookie use.
                </p>

                <p className="mt-5" style={{ fontWeight: "bold" }}>
                    Already have an account?
                </p>
                <Button className="rounded-pill" variant="outline-primary" onClick={handleShowLogin}>Sign in</Button>
                </Col>
            </Col>
            <Modal 
                show={modalShow != null} 
                centered
                onHide={handleClose}
                animation={false}
            >
                <Modal.Body>
                    <h2 className="mb-4" style={{ fontWeight: "bold"}}>
                        {modalShow === "signUp" 
                            ? "Create your account" 
                            : "login to your account"}
                    </h2>
                    <Form className="d-grid gap-2 px-5" onSubmit={modalShow === "signUp" ? handleSignUp : handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Control 
                            type="Email" 
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control
                                onChange={(e) => setPassword(e.target.value)}
                                type="password" 
                                placeholder="Password"
                            />
                        </Form.Group>
                        <p style={{ fontSize: "12px"}}>
                            By signing up, you agree to the Terms of Service and Privacy Policy including Cookie use.
                        </p>
                        <Button className="rounded-pill" type="submit">{modalShow === "signUp" ? "Sign up" : "Log in"}</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Row>
    );
}
