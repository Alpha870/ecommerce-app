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
  const [data, setData] = useState({});

  const getProduct = async () => {
    const id = window.location.href.split("/").pop();
    const url = `${import.meta.env.VITE_BASE_URL}products/get/${id}`;
    const result = await axios.get(url);
    const dataProduct = result.data.showProduct;
    setData(dataProduct);
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
              <Card.Header>{data.nombre}</Card.Header>
              <Card.Body>
                <Card.Text>{data.caracteristicas}</Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Horas: {data.horas} </ListGroup.Item>
                  <ListGroup.Item>Precio: {data.precio} </ListGroup.Item>
                  <ListGroup.Item>Forma Pago: {data.pagos} </ListGroup.Item>
                  <ListGroup.Item>Terminado en: {data.terminado} dias</ListGroup.Item>
                </ListGroup>
              </Card.Body>
              <Card.Body className="body-buttons">
                <Link to={"/products"}>
                  <Button variant="outline-secondary">Atrás</Button>
                </Link>
                <Link to={"/checkout"}>
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
