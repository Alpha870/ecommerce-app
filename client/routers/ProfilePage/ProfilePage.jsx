import React, { useEffect, useState } from "react";
import "./profile.css";
import useAuth from "../../auth/useAuth";
import axios from "axios";
import Header from "../../components/Header/MyHeader";
import Footer from "../../components/Footer/MyFooter";
import Boton from "../../components/Boton/Boton";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import interfaz from "./interfaz.png";
import settings from "./settings.png";
import { Link } from "react-router-dom";
import MyAlert from "../../components/Alert/MyAlert";
import Modal from "react-bootstrap/Modal";

const ProfilePage = () => {
  const { user, setUser } = useAuth();
  
  const [edit, setEdit] = useState(false);
  const [formUser, setFormUser] = useState(user);
  const [showPass, setShowPass] = useState(false);
  
  const [editAlert, setEditAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);

  //****EDITAR****/
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormUser({ ...formUser, [name]: value });
  };

  const getUser = async () => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/get?email=${
      user.email
    }`;
    const result = await axios.get(url, user);
    const dataUser = result.data.showUser;
    return dataUser;
  };

  const editUser = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_BASE_URL}/users/edit`;
    const result = await axios.put(url, { formUser });
    const dataUser = result.data.newEditUser;
    try {
      setUser(dataUser);
      setEdit(false);
      getUser();
      setEditAlert(true);
    } catch (error) {
      console.log(error);
    }
  };

  //****ELIMINAR****/
  const deleteUser = async () => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/delete`;
    await axios.delete(url, formUser.email);
    setUser(false);
  };

  //esta función hace que se resetee el editAlert automaticamente a false
  const timeAlert = () => {
    setTimeout(() => {
      setEditAlert(false);
    }, 3000);
  };
  useEffect(() => {
    timeAlert();
  }, [editAlert]);

  

  return (
    <section>
      <Header />
      <article className="article-profile">
        {editAlert && (
          <MyAlert
            head={"Enhorabuena"}
            color={"success"}
            text={`Tu perfil se a editado correctamente`}
          />
        )}
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
              <Button variant="outline-danger" onClick={() => setShowModal(true)}>
                Eliminar
              </Button>
            </Card.Body>
            <>
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Cuidado!!!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Estas apunto de eliminar tu perfil para siempre?
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                      Cerrar
                    </Button>
                    <Button variant="danger" onClick={deleteUser}>
                      Si, quiero eliminar
                    </Button>
                  </Modal.Footer>
                </Modal>
            </>

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
