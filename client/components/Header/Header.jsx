import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "./codework-sfr.png";
import "./Header.css";

const Header = () => {
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
            <Link to={"/"} className="container-logo">
              <img src={Logo} alt="logo-empresa" className="logo" />
            </Link>
            <Navbar.Brand>
              <Link to={"/checkout"}>
                <i className="bx bx-cart bx-md"></i>
              </Link>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          </Container>
        </Navbar>

        <Offcanvas className="lateral" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <Link to={"/"}>
                <span className="titulo-lateral">INCIO</span>
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Nav className="showList">
            <Nav.Link>
              <Link to={"/products"}>Servicios/packs</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/about"}>Conocer más</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/login"}>Iniciar sesión </Link>
            </Nav.Link>
            <Nav.Link className="perfil">
              <Link to={"/profile"}>
                <i className="bx bxs-user-detail bx-sm"></i>
              </Link>
            </Nav.Link>
          </Nav>
        </Offcanvas>
      </header>
    </>
  );
};

export default Header;
