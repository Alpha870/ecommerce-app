import React, { useState } from "react";
import "./profile.css";
import useAuth from "../../auth/useAuth";
import axios from "axios";
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
  const { user, setUser } = useAuth();

  const [edit, setEdit] = useState(false);
  const [formUser, setFormUser] = useState(user);
  const [showPass, setShowPass] = useState(false);

  //****EDITAR****/
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormUser({ ...formUser, [name]: value });
  };

  const getUser = async () => {
    const url = `${import.meta.env.VITE_BASE_URL}users/get`;
    const result = await axios.get(url, user);
    const dataUser = result.data.showUser;
    console.log(dataUser);
    modifyUser(dataUser);
  };

  const editUser = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_BASE_URL}users/edit`;
    const result = await axios.put(url, { formUser });
    const dataUser = result.data.newEditUser;
    modifyUser(dataUser);
    setUser(formUser);
    setEdit(false);
    getUser();
  };

  const modifyUser = (dataUser) => {
    setFormUser({
      nombre: dataUser.nombre,
      telefono: dataUser.telefono,
      email: dataUser.email,
      password: dataUser.password,
    });
  };

  //****ELIMINAR****/
  const deleteUser = async () => {
    const url = `${import.meta.env.VITE_BASE_URL}users/delete`;
    await axios.delete(url, formUser.email);
    setUser(false);
  };

  return (
    <section>
      <Header />
      <article className="article-profile">
        {!edit && (
          <Card className="card-profile">
            <img src={interfaz} alt="interface perfil" />
            <Card.Body>
              <Card.Header>{formUser.nombre}</Card.Header>
              <Card.Header>{formUser.telefono}</Card.Header>
              <Card.Header>{formUser.email}</Card.Header>
              {showPass ? (
                <Card.Header className="password-profile">
                  {formUser.password}{" "}
                  <i
                    onClick={() => setShowPass(false)}
                    className="bx bx-low-vision bx-sm float-end"
                    style={{ cursor: "pointer" }}
                  ></i>
                </Card.Header>
              ) : (
                <Card.Header>
                  ***********
                  <i
                    onClick={() => setShowPass(true)}
                    className="bx bx-low-vision bx-sm float-end"
                    style={{ cursor: "pointer" }}
                  ></i>
                </Card.Header>
              )}
            </Card.Body>
            <Card.Body className="body-buttons">
              <Button variant="outline-warning" onClick={() => setEdit(true)}>
                Editar
              </Button>
              <Button variant="outline-danger" onClick={deleteUser}>
                Eliminar
              </Button>
            </Card.Body>

            <Card.Body className="div-button-profile">
              <Link to={"/orders"}>
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
              <Form onSubmit={editUser}>
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
                  <Button
                    onClick={() => setEdit(false)}
                    variant="outline-warning me-5"
                  >
                    Cancelar
                  </Button>
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
