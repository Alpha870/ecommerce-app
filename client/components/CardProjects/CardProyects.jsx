import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Boton from "../Boton/Boton";
import "./cardProyects.css";
import { CardImg } from "react-bootstrap";

const CardProyects = ({
  image,
  nombre,
  subtitle,
  text,
  width,
  url,
  certificates,
  urlCredly,
}) => {
  return (
    <>
      <Card className="card-proyectos" style={{ width: width }}>
        <Card.Img variant="top" src={image} style={{ height: "auto" }} />
        <Card.Body className="card-body-proyectos">
          <div>
            <Card.Title>{nombre}</Card.Title>
            <Card.Subtitle style={{ margin: "1rem 0rem" }}>
              {subtitle}
            </Card.Subtitle>
          </div>
          <Card.Text>{text}</Card.Text>
          <div className="div-card">
            <Link to={url}>
              <Boton
                type={"button"}
                height={"2.5rem"}
                texto={"Ir al proyecto"}
              />
            </Link>
            <Link to={urlCredly}>
              <CardImg
                className="card-certificados"
                style={{ width: "4rem" }}
                src={certificates}
              />
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardProyects;
