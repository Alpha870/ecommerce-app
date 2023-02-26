import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "./coding-sf.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="navbar">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className="logo">
            <Link to={"/"}>
              <img src={Logo} alt="logo-empresa" height={100} />
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/">Inicio</Nav.Link>
            <Nav.Link href="#features">Tarifas</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <Nav.Link href="#pricing">Más info</Nav.Link>
          </Nav>
          <Navbar.Brand>
            <Link to={"/checkout"}>
              <i className="bx bx-cart bx-sm"></i>
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
