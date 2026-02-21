import { Navbar, Button } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileSideBar from "./components/ProfileSideBar";
import ProfileMidBody from "./components/ProfileMidBody";

export default function ProfilePage() {
    const [authToken, setAuthToken] = useState(() => localStorage.getItem("authToken") || "");
    const navigate = useNavigate();

    useEffect(() => {
        if (!authToken) {
            navigate("/login");
        }
    }, [authToken, navigate]);

    const handleLogout = () => {
        setAuthToken("");
        localStorage.removeItem("authToken");
        navigate("/login");
    };

    return ( 
        <Container>
            <Row>
                <ProfileSideBar handleLogout={handleLogout} />
                <ProfileMidBody/>
            </Row>
        </Container>
    )
}