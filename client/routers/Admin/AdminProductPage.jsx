import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from "../../components/Header/Header";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const AdminProductPage = () => {
  const [edit, setEdit] = useState(false);
  const [showProduct, setShowProduct] = useState([]);
  console.log(showProduct);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormproduct({ ...formProduct, [name]: value });
  };

  //****MOSTRAR****/
  const getAllProducts = async () => {
    const url = `${import.meta.env.VITE_BASE_URL}products/getAll`;
    const result = await axios.get(url);
    console.log(result);
    const res = result.data.allProducts;
    setShowProduct(res);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  //****CREAR****/
  const saveProduct = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_BASE_URL}/products/create`;
    const result = await axios.post(url, formProduct);
    if (result.status === 200) {
      console.log(result);
    } else {
      console.log("error en el registro");
    }
  };

  //****EDITAR****/
  const editProduct = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_BASE_URL}products/edit`;
    const result = await axios.put(url, { formUser });
    const dataUser = result.data.newEditUser;
    modifyUser(dataUser);
    // setUser(formUser);
    // setEdit(false);
    // getUser();
  };

  const getProduct = async () => {
    const url = `${import.meta.env.VITE_BASE_URL}products/get`;
    const result = await axios.get(url, user);
    const dataUser = result.data.showUser;
    console.log(dataUser);
    // modifyUser(dataUser);
  };

  //****ELIMINAR****/

  const deleteProduct = async () => {
    const url = `${import.meta.env.VITE_BASE_URL}products/delete`;
    await axios.delete(url, formUser.email);
    // setUser(false);
  };

  return (
    <>
      <Header />
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {showProduct &&
          showProduct.map((item) => (
            <div key={item._id}>
              <Card style={{ width: "15rem" }}>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Nombre: {item._id}</ListGroup.Item>
                    <ListGroup.Item>Nombre: {item.nombre}</ListGroup.Item>
                    <ListGroup.Item>horas: {item.horas}</ListGroup.Item>
                    <ListGroup.Item>precio: {item.precio}</ListGroup.Item>
                    <ListGroup.Item>pagos: {item.pagos}</ListGroup.Item>
                    <ListGroup.Item>
                      caracteristicas: {item.caracteristicas}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      terminado en: {item.terminado}
                    </ListGroup.Item>
                  </ListGroup>
                  <Button variant="primary">Guardar el id</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
      </section>
      <Form style={{ width: "50%", margin: "0 auto", marginTop: "3rem" }}>
        <h4 style={{ margin: "2rem" }}>PANEL ADMIN CREAR PRODUCTOS</h4>
        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
          <Form.Label>Id</Form.Label>
          <Form.Control type="text" name="id" value={formProduct.id} disabled />
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
        <Button type="submit" onClick={saveProduct} className="mt-3 me-5">
          Crear
        </Button>
        <Button type="submit" variant="warning" className="mt-3 me-5">
          Editar
        </Button>
        <Button
          type="submit"
          onClick={deleteProduct}
          variant="danger"
          className="mt-3"
        >
          Eliminar
        </Button>
      </Form>
    </>
  );
};

export default AdminProductPage;
