import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./login.css";
import trabajar from "./cohete.png";
import lapiz from "./lapiz.png";
import Boton from "../../components/Boton/Boton";

const LoginPage = () => {
  const [register, setRegister] = useState(true);

  const [dataUser, setDataUser] = useState({
    nombre: "",
    telefono: "",
    email: "",
    password: "",
  });
  const initialUser = {
    nombre: "",
    telefono: "",
    email: "",
    password: "",
  };

  //****CREAR****/
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUser({ ...dataUser, [name]: value });
    // console.log(formUser);
  };

  const saveUser = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/api/users";
    const result = await axios.post(url, dataUser);
    if (result.status === 200) {
      setDataUser(initialUser);
    } else {
      console.log('error en el registro')
    }
  };

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
                  <Form.Control
                    type="email"
                    placeholder="Correo Electronico"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    required
                  />
                  <Form.Text className="text-muted">
                    No tengo cuenta necesito
                    <button
                      type="button"
                      className="button-nada"
                      onClick={() => setRegister(false)}
                    >
                      registrarme
                    </button>
                  </Form.Text>
                </Form.Group>
                <Boton
                  type={"submit"}
                  height={"3rem"}
                  texto={"Iniciar Sesión"}
                />
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
              <Form onSubmit={saveUser}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control
                    type="text"
                    placeholder="Nombre y apellidos"
                    name="nombre"
                    value={dataUser.nombre}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTelefon">
                  <Form.Control
                    type="number"
                    placeholder="Teléfono"
                    name="telefono"
                    value={dataUser.telefono}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Correo Electronico"
                    name="email"
                    value={dataUser.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={dataUser.password}
                    onChange={handleChange}
                    required
                  />
                  <Form.Text className="text-muted">
                    Ya tengo cuenta quiero
                    <button
                      type="button"
                      className="button-nada"
                      onClick={() => setRegister(true)}
                    >
                      Iniciar Sesión
                    </button>
                  </Form.Text>
                </Form.Group>
                <Boton type={"submit"} height={"3rem"} texto={"Registrarme"} />
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

export default LoginPage;
