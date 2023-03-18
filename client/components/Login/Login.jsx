import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./login.css";
import trabajar from "./cohete.png";
import lapiz from "./lapiz.png";
import Boton from "../Tools/Boton/Boton";

const Login = () => {
  const [register, setRegister] = useState(true);

  return (
    <section className="section-login">
      <Header />
      <article className="article-login">
        {/* Si esta registrado ↓↓ */}
        {register && (
          <Card className="card-login">
            <h4>¿Ya tienes una cuenta?</h4>
            <h5>Inicia sesión para seguir</h5>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Correo Electronico" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Contraseña" required/>
                  <Form.Text className="text-muted">
                    No tengo cuenta necesito
                    <button
                      className="button-nada"
                      onClick={() => setRegister(false)}
                    >
                      registrarme
                    </button>
                  </Form.Text>
                </Form.Group>
                <Boton height={"3rem"} texto={"Iniciar Sesión"} />
              </Form>
            </Card.Body>
            <div className="img-card-login">
              <img src={trabajar} alt="cohete con bombilla" />
            </div>
          </Card>
        )}

        {/* No esta registrado ↓↓ */}
        {!register && (
          <Card className="card-login">
            <h4>¿Aún no tienes una cuenta?</h4>
            <h5>Registrate para que puedas iniciar sesión</h5>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="text" placeholder="Nombre y apellidos" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="number" placeholder="Teléfono" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Correo Electronico" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Contraseña" required/>
                  <Form.Text className="text-muted">
                    Ya tengo cuenta quiero
                    <button
                      className="button-nada"
                      onClick={() => setRegister(true)}
                    >
                      Iniciar Sesión
                    </button>
                  </Form.Text>
                </Form.Group>
                <Boton height={"3rem"} texto={"Registrarme"} />
              </Form>
            </Card.Body>
            <div className="img-card-login">
              <img src={lapiz} alt="personas y lapiz gigante" />
            </div>
          </Card>
        )}
      </article>
      <Footer />
    </section>
  );
};

export default Login;
