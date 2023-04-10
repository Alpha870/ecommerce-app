import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Boton from "../Boton/Boton";

const CardProduct = ({ image, nombre, subtitle, text, id }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
          <Card.Text>{text}</Card.Text>
          <Link to={`/products/${id}`}>
            <Boton type={"button"} height={"2.5rem"} texto={"Más detalles"} />
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardProduct;
