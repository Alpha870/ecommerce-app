import React, { useEffect, useState } from "react";
import "./productOne.css";
import Header from "../../components/Header/MyHeader";
import Footer from "../../components/Footer/MyFooter";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

import time from "../ProductsPage/Time.png";
import web from "../ProductsPage/Web.png";
import store from "../ProductsPage/Store.png";

import { Link } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
  const [product, setProduct] = useState({});

  const getProduct = async () => {
    const id = window.location.href.split("/").pop();
    const url = `${import.meta.env.VITE_BASE_URL}products/get/${id}`;
    const result = await axios.get(url);
    const dataProduct = result.data.showProduct;
    setProduct({
      _id: dataProduct._id,
      nombre: dataProduct.nombre,
      horas: dataProduct.horas,
      subtitulo: dataProduct.subtitulo,
      caracteristicas: dataProduct.caracteristicas.split("."),
      precio: dataProduct.precio,
      pagos: dataProduct.pagos.split("."),
      terminado: dataProduct.terminado,
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  const selectImage = () => {
    if (product.nombre === "PACK/HORAS") {
      return time;
    } else if (product.nombre === "DISEÑO WEB") {
      return web;
    } else {
      return store;
    }
  };

  return (
    <section>
      <Header />
      <article className="article-productOne">
        <Card className="card-productOne">
          <Card.Img
            style={{ maxWidth: "30rem", margin: "0 auto" }}
            variant="top"
            src={selectImage()}
          />
          <Card.Title className="card-title-productOne">
            {product.nombre}
          </Card.Title>
          <Card.Subtitle className="card-title-productOne">
            {product.horas}
          </Card.Subtitle>
          <Card.Body>
            <Card.Text>{product.subtitulo}</Card.Text>
            {product.caracteristicas &&
              product.caracteristicas.map((item, index) => (
                <ListGroup key={index}>{item}</ListGroup>
              ))}
            <ListGroup className="card-text-productOne">
              <span className="card-span-productOne">Pagos:</span>
              {product.pagos}
            </ListGroup>
            <Card.Text className="card-text-productOne">
              <span className="card-span-productOne">Precio:</span>
              {product.precio}
            </Card.Text>
            <Card.Text className="card-text-productOne">
              <span className="card-span-productOne">Terminado en: </span>
              {product.terminado} dias
            </Card.Text>
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
