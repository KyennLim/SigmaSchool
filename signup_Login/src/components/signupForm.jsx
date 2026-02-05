import {Form, Button } from 'react-bootstrap';
import {useState, useEffect} from 'react';

function signupForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    function handleSubmit(event) {
        event.preventDefault();
        // Handle form submission logic here
        
        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Signup successful!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Signup failed. Please try again.');
        });
    };

    
    return (
        <div>
            <h2>signupForm</h2>
            <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter username" value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default signupForm;