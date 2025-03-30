import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa'; // You'll need to install react-icons

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [error] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempted with:', email, password);
    };

    const handleForgotPassword = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Password reset requested for:', email);
    };

    return (
        <Container fluid className="bg-light min-vh-100 d-flex align-items-center">
            <Row className="justify-content-center w-100">
                <Col md={4} sm={8}>
                    <div className="card shadow-lg">
                        <div className="card-body p-5">
                            <div className="text-center mb-4">
                                <div className="bg-primary rounded-circle d-inline-flex p-3 mb-3">
                                    <FaUser size={30} color="white" />
                                </div>
                                <h2 className="fw-bold text-primary">
                                    {showForgotPassword ? 'Reset Password' : 'Welcome Back'}
                                </h2>
                                <p className="text-muted">
                                    {showForgotPassword 
                                        ? 'Enter your email to reset password' 
                                        : 'Please enter your credentials'}
                                </p>
                            </div>

                            {error && <Alert variant="danger">{error}</Alert>}

                            <Form onSubmit={showForgotPassword ? handleForgotPassword : handleLogin}>
                                <Form.Group className="mb-4">
                                    <div className="input-group">
                                        <span className="input-group-text bg-light">
                                            <FaEnvelope className="text-primary" />
                                        </span>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="py-2"
                                        />
                                    </div>
                                </Form.Group>

                                {!showForgotPassword && (
                                    <Form.Group className="mb-4">
                                        <div className="input-group">
                                            <span className="input-group-text bg-light">
                                                <FaLock className="text-primary" />
                                            </span>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                                className="py-2"
                                            />
                                        </div>
                                    </Form.Group>
                                )}

                                <div className="d-grid gap-2">
                                    <Button 
                                        variant="primary" 
                                        type="submit" 
                                        size="lg"
                                        className="rounded-pill"
                                    >
                                        {showForgotPassword ? 'Reset Password' : 'Sign In'}
                                    </Button>
                                </div>

                                <div className="text-center mt-4">
                                    <Button
                                        variant="link"
                                        onClick={() => setShowForgotPassword(!showForgotPassword)}
                                        className="text-decoration-none"
                                    >
                                        {showForgotPassword
                                            ? '← Back to Login'
                                            : 'Forgot Password?'}
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;