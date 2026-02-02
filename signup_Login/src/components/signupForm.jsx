import {Form, Button } from 'react-bootstrap';
import {useState, useEffect} from 'react';

function signupForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    function handleSubmit(event) {
        event.preventDefault();
        // Handle form submission logic here

        // remember to fetch db and match username so that they do not already exist


    };

    
    return (
        <div>
            <h2>signupForm</h2>
            <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default signupForm;