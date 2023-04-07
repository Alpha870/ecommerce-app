import React, { useEffect, useState } from "react";
import "./productOne.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import task from "./task.png";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
  const [product, setProduct] = useState({});

  const getProduct = async () => {
    const id = window.location.href.split("/").pop();
    const url = `${import.meta.env.VITE_BASE_URL}products/get/${id}`;
    const result = await axios.get(url);
    const dataProduct = result.data.showProduct;
    setProduct(dataProduct);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <section>
      <Header />
      <article className="article-productOne">
        <Card className="card-productOne">
          <Card.Img variant="top" src={task} />
          <Card.Header className="card-title-productOne">
            {product.nombre}
          </Card.Header>
          <Card.Body>
            <Card.Text className="card-title-productOne">
              {product.caracteristicas}
            </Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Horas: {product.horas} </ListGroup.Item>
              <ListGroup.Item>Precio: {product.precio} </ListGroup.Item>
              <ListGroup.Item>Forma Pago: {product.pagos} </ListGroup.Item>
              <ListGroup.Item>
                Terminado en: {product.terminado} dias
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <Card.Body className="body-buttons">
            <Link to={"/products"}>
              <Button variant="outline-secondary">Atrás</Button>
            </Link>
            <Link to={`/checkout/${product._id}`}>
              <Button variant="primary">Agregar al carrito</Button>
            </Link>
          </Card.Body>
        </Card>
      </article>
      <Footer />
    </section>
  );
};

export default ProductPage;
