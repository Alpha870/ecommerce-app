import React from "react";
import "./productOne.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import task from "./task.png";
import { Link } from "react-router-dom";

const ProductOne = () => {
  return (
    <section>
      <Header />
      <article className="article-productOne">
        <Card className="card-productOne">
          <Card.Img variant="top" src={task} />
          <Card.Header>Nombre producto</Card.Header>
          <Card.Body>
            <Card.Text>Descripción del pack</Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Horas:</ListGroup.Item>
              <ListGroup.Item>Precio:</ListGroup.Item>
              <ListGroup.Item>Forma Pago:</ListGroup.Item>
              <ListGroup.Item>Terminado en:</ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <Card.Body className="body-buttons">
            <Link to={"/products"}>
              <Button variant="outline-secondary">Atrás</Button>
            </Link>
            <Link to={"/checkout"}>
              <Button variant="primary">Agregar al carrito</Button>
            </Link>
          </Card.Body>
        </Card>
      </article>
      <Footer />
    </section>
  );
};

export default ProductOne;
