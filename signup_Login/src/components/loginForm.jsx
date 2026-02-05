import {Form, Button } from 'react-bootstrap';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function loginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        // Handle form submission logic here

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // CHECK if auth is true
            if (data.auth) {
                alert('Login successful!');
                // Store token in localStorage
                localStorage.setItem('token', data.token);
                navigate('/dashboard'); // Navigate to dashboard
            } else {
                alert('Login failed. Invalid username or password.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Login failed. Please try again.');
        });

    };
    return (
        <div>
            <h2>loginForm</h2>
            <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter username" 
                    value={username} onChange={(e) => setUsername(e.target.value)} 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default loginForm;