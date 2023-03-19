import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Boton from "../Boton/Boton";

const CardProduct = ({ image, title, text }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Link to={`/products/${title}`}>
            <Boton type={"button"} height={"2.5rem"} texto={"Más detalles"} />
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardProduct;
