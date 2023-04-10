import React, { useState } from "react";
import "./header.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "./codework-sfr.png";
import useAuth from "../../auth/useAuth";

const Header = () => {
  const { user, setUser, admin } = useAuth();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <header className="header">
        <Navbar className="navbar" expand="xxxl">
          <Container>
            <Navbar.Brand onClick={handleShow}>
              <i className="bx bx-menu bx-md"></i>
            </Navbar.Brand>
            <div className="container-logo">
              <Link to={"/"}>
                <img src={Logo} alt="logo-empresa" className="logo" />
              </Link>
            </div>
            <Navbar.Brand>
              <Link to={"/checkout"}>
                <i className="bx bx-cart bx-md"></i>
              </Link>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          </Container>
        </Navbar>

        <Offcanvas
          className="lateral"
          placement="start"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeVariant="white" closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="showList">
              <Link to={"/"}>Inicio</Link>
              <Link to={"/about"}>Blog</Link>
              <Link className="servicios-header" to={"/products"}>Servicios</Link>
              {!user ? (
                <Nav.Link href="/login">Iniciar sesión</Nav.Link>
              ) : (
                <>
                  {admin ? (
                    <>
                      <p className="separador-header">Admin</p>
                      <Link to={"/profile"}>
                        Mi cuenta
                      </Link>
                      <Link to={"/admin/create/product"}>Crear Productos</Link>
                      <Link to={"/"} onClick={() => setUser(false)}>
                        {" "}
                        Cerrar sesión
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link className="perfil" to={"/profile"}>
                        Mi cuenta
                      </Link>
                      <Link to={"/orders"}>Mis pedidos</Link>
                      <Link to={"/"} onClick={() => setUser(false)}>
                        {" "}
                        Cerrar sesión
                      </Link>
                    </>
                  )}
                </>
              )}
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </header>
    </>
  );
};

export default Header;
