import React, { useState } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import '../../components/FIFASearch/Input.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login form-con">
            <form onSubmit={handleSubmit} className="form">
                <FormGroup controlId="email" bsSize="large" className="form-inputs">
                    <FormControl
                        className="form-input"
                        autoFocus
                        placeholder="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large" className="form-inputs">
                    <FormControl
                        className="form-input"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <Button block bsSize="large" disabled={!validateForm()} type="submit" className="form-button">
                    Login
                </Button>
            </form>
        </div>
    );
}
