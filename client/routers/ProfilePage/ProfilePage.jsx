import React, { useState } from "react";
import "./profile.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Boton from "../../components/Boton/Boton";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import interfaz from "./interfaz.png";
import settings from "./settings.png";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [edit, setEdit] = useState(false);

  const [formUser, setFormUser] = useState({
    nombre: "",
    telefono: "",
    email: "",
    password: "",
  });
  const productoInicio = {
    nombre: "",
    telefono: "",
    email: "",
    password: "",
  };

  //****CREAR****/
  function handleChange(e) {
    const { name, value } = e.target;
    setFormUser({ ...formUser, [name]: value });
    // console.log(formUser);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formUser);
    setFormUser(productoInicio);
    setEdit(false);
  };

  return (
    <section>
      <Header />
      <article className="article-profile">
        {!edit && (
          <Card className="card-profile">
            <img src={interfaz} alt="interface perfil" />
            <Card.Body>
              <Card.Header>Nombre y apellidos</Card.Header>
              <Card.Header>Teléfono</Card.Header>
              <Card.Header>Correo electrónico</Card.Header>
              <Card.Header>Password</Card.Header>
            </Card.Body>
            <Card.Body className="body-buttons">
              <Button variant="outline-warning" onClick={() => setEdit(true)}>
                Editar
              </Button>
              <Button variant="outline-danger">Eliminar</Button>
            </Card.Body>
            
            <Card.Body className="div-button-profile">
              <Link to={'/orders'}>
              <Boton
                type={"button"}
                height={"3rem"}
                texto={"Ir a mis pedidos"}
              />
              </Link>
            </Card.Body>
          </Card>
        )}
        {edit && (
          <Card className="card-profile">
            <img src={settings} alt="interface perfil" />
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control
                    type="text"
                    placeholder="Nombre y apellidos"
                    name="nombre"
                    value={formUser.nombre}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTelefon">
                  <Form.Control
                    type="number"
                    placeholder="Teléfono"
                    name="telefono"
                    value={formUser.telefono}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Correo Electronico"
                    name="email"
                    value={formUser.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={formUser.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <div className="div-button-profile">
                  <Boton type={"submit"} height={"3rem"} texto={"Modificar"} />
                </div>
              </Form>
            </Card.Body>
          </Card>
        )}
      </article>
      <Footer />
    </section>
  );
};

export default ProfilePage;
