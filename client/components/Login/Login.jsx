import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./login.css";
import circle from "./circle.png";

const Login = () => {
  return (
    <section className="section-login">
      <Card className="card-login">
        <Card.Title>Iniciar Sesión</Card.Title>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Introducir email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Introducir password" />
              <Form.Text className="text-muted">
                Nunca compartiremos sus datos.
              </Form.Text>
            </Form.Group>
            <Button className="float-center" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Login;
