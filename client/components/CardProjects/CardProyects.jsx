import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Boton from "../Boton/Boton";

const CardProyects = ({ image, nombre, subtitle, text, width, url }) => {
  return (
    <>
      <Card style={{ width: width, height:'auto'  }}>
        <Card.Img variant="top" src={image} style={{height: 'auto'}} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Subtitle style={{margin: '1rem 0rem'}}>{subtitle}</Card.Subtitle>
          <Card.Text>{text}</Card.Text>
          <Link to={url}>
            <Boton type={"button"} height={"2.5rem"} texto={"Ir al proyecto"} />
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardProyects;
