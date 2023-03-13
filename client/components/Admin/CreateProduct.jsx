import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateProduct = () => {
  return (
    <>
      <Form style={{ width: "50%", margin: "0 auto", marginTop: "3rem" }}>
      <h4 style={{ margin: "2rem" }}>
        PANEL ADMIN CREAR PRODUCTOS
      </h4>
        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre Producto</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
          <Form.Label>Horas</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
          <Form.Label>Forma Pagos</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Caracteristicas</Form.Label>
          <Form.Control as="textarea" rows={13} />
        </Form.Group>
        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
          <Form.Label>Terminada entre -aprox-</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Button type="submit" className="mt-3">
          Crear
        </Button>
      </Form>
    </>
  );
};

export default CreateProduct;
