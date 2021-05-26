import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, loginWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (error) {
      setError("Failed to Sign In ");
    }
    setLoading(false);
  }
  async function handleGoogleClick() {
    try {
      setError("");
      setLoading(true);
      await loginWithGoogle();
      history.push("/");
    } catch (error) {
      setError("Failed to Sign In ");
    }
    setLoading(false);
  }
  async function handleFacebookClick(){

  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                required
              ></Form.Control>
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-2" type="submit">
              Log In
            </Button>
          </Form>
          <Row xs={6} className="mt-2 justify-content-center">
            <Button variant="light" onClick={handleGoogleClick} className="m-2">
              <FcGoogle  size={30} />
            </Button>
            <Button variant="light"onClick={handleFacebookClick} className="m-2">
            <FaFacebook size={30}/>
            </Button>
          </Row>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        I dont have an account ? <Link to="/signup">Create one</Link>
      </div>
    </>
  );
}
