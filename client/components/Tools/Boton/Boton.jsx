import React from "react";
import Button from "react-bootstrap/Button";
import "./Boton.css";

const Boton = ({height, texto}) => {
  return (
    <Button style={{ height:`${height}`, width: "auto" }} className="boton">
      {texto}
    </Button>
  );
};

export default Boton;
