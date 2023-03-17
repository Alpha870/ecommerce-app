import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateProduct = () => {
  const [formProduct, setFormproduct] = useState({
    id: "",
    nombre: "",
    horas: "",
    precio: "",
    pagos: "",
    caracteristicas: "",
    terminado: "",
  });
  const productoInicio = {
    id: "",
    nombre: "",
    horas: "",
    precio: "",
    pagos: "",
    caracteristicas: "",
    terminado: "",
  };
  
  //****CREAR****/
  function handleChange(e) {
    const { name, value } = e.target;
    setFormproduct({ ...formProduct, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formProduct);
    setFormproduct(productoInicio)
  };

  //****EDITAR****/

  //****ELIMINAR****/



  return (
    <>
      <Form
        onSubmit={handleSubmit}
        style={{ width: "50%", margin: "0 auto", marginTop: "3rem" }}
      >
        <h4 style={{ margin: "2rem" }}>PANEL ADMIN CREAR PRODUCTOS</h4>
        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
          <Form.Label>Id</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={formProduct.id}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre Producto</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={formProduct.nombre}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
          <Form.Label>Horas</Form.Label>
          <Form.Control
            type="text"
            name="horas"
            value={formProduct.horas}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="text"
            name="precio"
            value={formProduct.precio}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
          <Form.Label>Forma Pagos</Form.Label>
          <Form.Control
            type="text"
            name="pagos"
            value={formProduct.pagos}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Caracteristicas</Form.Label>
          <Form.Control
            as="textarea"
            name="caracteristicas"
            value={formProduct.caracteristicas}
            onChange={handleChange}
            rows={13}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
          <Form.Label>Terminada entre -aprox-</Form.Label>
          <Form.Control
            type="text"
            name="terminado"
            value={formProduct.terminado}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit" className="mt-3">
          Crear
        </Button>
      </Form>
    </>
  );
};

export default CreateProduct;
