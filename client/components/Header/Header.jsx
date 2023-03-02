import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "./logo-sf.png";
import "./Header.css";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <header className="navbar">
        <Link to={"/"}>
          <img src={Logo} alt="logo-empresa" className="logo" />
        </Link>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand onClick={handleShow}>
              <Link to={"/"}>
                <i class="bx bx-menu"></i>
              </Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to={"/checkout"}>
                <i className="bx bx-cart"></i>
              </Link>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          </Container>
        </Navbar>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Inicio</Offcanvas.Title>
          </Offcanvas.Header>
          <Nav className="showList">
            <Nav.Link>
              <Link to={'/'}>HOME</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/productos'}>PRODUCTOS</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'#Nosotros'}>CONÓCENOS</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/profile'}>MI PERFIL</Link>
            </Nav.Link>
          </Nav>
        </Offcanvas>
      </header>
    </>
  );
};

export default Header;
