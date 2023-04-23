import React, { useState } from "react";
import useAuth from "../../auth/useAuth";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Footer from "../../components/Footer/MyFooter";
import Header from "../../components/Header/MyHeader";
import "./login.css";
import trabajar from "./cohete.png";
import lapiz from "./lapiz.png";
import Boton from "../../components/Boton/Boton";

const LoginPage = () => {
  const { setUser, setAdmin } = useAuth();
  // estado para saber si quiere registrarse
  const [register, setRegister] = useState(false);
  const [succesAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

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

  //****LOGIN****/
  const changeLogin = (e) => {
    const { name, value } = e.target;
    setDataLogin({ ...dataLogin, [name]: value });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_BASE_URL}/users/login`;
    const result = await axios.post(url, dataLogin);
    const res = result.data.user;
    try {
      if (res.password === import.meta.env.VITE_ADMIN_PASS) {
        setAdmin(true);
      }
      setUser({
        id: res._id,
        nombre: res.nombre,
        telefono: res.telefono,
        email: res.email,
        password: res.password,
      });
    } catch (error) {
      console.log("error en el registro", error);
    }
  };

  //****CREAR****/
  const changeRegister = (e) => {
    const { name, value } = e.target;
    setDataUser({ ...dataUser, [name]: value });
  };

  const saveUser = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_BASE_URL}/users/create`;
    const result = await axios.post(url, dataUser);
    const res = result.data.newCreateUser;
    try {
      setUser({
        id: res._id,
        nombre: res.nombre,
        telefono: res.telefono,
        email: res.email,
        password: res.password,
      });
      setSuccessAlert(true);
    } catch (error) {
      setErrorAlert(true);
    }
  };

  return (
    <section className="section-login">
      <Header />
      <article className="article-login">
        {successAlert && (
          <MyAlert
            head={"Registro exitoso"}
            color={"success"}
            text={`ya puedes comprar tus servicios!!!`}
            redirect={"/products"}
          />
        )}
        {errorAlert && (
          <MyAlert
            head={"Error"}
            color={"danger"}
            text={`Su registro no se a podido finalizar. Vuelva a intentarlo más tarde`}
          />
        )}
        {/* No quiere registrarse ↓↓ */}
        {!register && (
          <Card className="card-login">
            <h4>¿Ya tienes una cuenta?</h4>
            <h5>Inicia sesión para seguir</h5>
            <Card.Body>
              <Form onSubmit={loginUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Correo Electronico"
                    name="email"
                    value={dataLogin.email}
                    onChange={changeLogin}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={dataLogin.password}
                    onChange={changeLogin}
                    required
                  />
                  <Form.Text className="text-muted">
                    No tengo cuenta necesito
                    <button
                      type="button"
                      className="button-nada"
                      onClick={() => setRegister(true)}
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

        {/* Quiere registrarse ↓↓ */}
        {register && (
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
                    onChange={changeRegister}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTelefon">
                  <Form.Control
                    type="number"
                    placeholder="Teléfono"
                    name="telefono"
                    value={dataUser.telefono}
                    onChange={changeRegister}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Correo Electronico"
                    name="email"
                    value={dataUser.email}
                    onChange={changeRegister}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={dataUser.password}
                    onChange={changeRegister}
                    required
                  />
                  <Form.Text className="text-muted">
                    Ya tengo cuenta quiero
                    <button
                      type="button"
                      className="button-nada"
                      onClick={() => setRegister(false)}
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
