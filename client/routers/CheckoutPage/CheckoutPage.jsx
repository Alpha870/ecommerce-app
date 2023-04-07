import { useEffect, useState } from "react";
import "./checkout.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import axios from "axios";
import useAuth from "../../auth/useAuth";

const CheckoutPage = () => {
  const { user, setUser } = useAuth();
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState({
    usuario: user.nombre,
    producto: "",
    precio: "",
  });

  const getProduct = async () => {
    const id = window.location.href.split("/").pop();
    const url = `${import.meta.env.VITE_BASE_URL}checkout/get/${id}`;
    const result = await axios.get(url);
    const dataProduct = result.data.showProduct;
    setProduct(dataProduct);
    setCart({
      usuario: user.nombre,
      producto: dataProduct.nombre,
      precio: dataProduct.precio,
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log(cart);

  return (
    <>
      <Header />
      <section className="section-check">
        <h1 className="h1-check">Carrito de compras</h1>
        <h6>{`Hola ${cart.usuario}, te agradezco que hayas 
      llegado hasta este punto completa tu compra con el pedido`}</h6>
        {product && (
          <Card style={{ width: "18rem" }}>
            <Card.Header>{cart.producto}</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>precio: {cart.precio}$</ListGroup.Item>
            </ListGroup>
          </Card>
        )}
        <div className="div-check">
          <h5>TOTAL = {cart.precio} $</h5>
          <Button className="button-check" variant="primary">
            Realizar la compra
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CheckoutPage;
