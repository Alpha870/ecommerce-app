import React from "react";
import Button from "react-bootstrap/Button";
import "./Boton.css";

const Boton = ({ type, height, texto }) => {
  return (
    <Button
      type={type}
      style={{ height: `${height}`, width: "auto" }}
      className="boton"
    >
      {texto}
    </Button>
  );
};

export default Boton;
