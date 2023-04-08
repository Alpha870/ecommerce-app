import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../auth/useAuth";
import "./checkout.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { PayPalButtons } from "@paypal/react-paypal-js";

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

  // **************ORDENES DE PAYPAL**************

  // Configurar el pago
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: `${cart.precio}`,
          },
        },
      ],
    });
  };
  // Inicializar el botón de pago
  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      alert(`Transaction completed by ${name}`);
    });
  };

  // console.log(product,'soy el producto')
  // console.log(cart, 'soy el carrito');

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
          {user ? (
              <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
          ) : (
            <div className="spinner">
              <h2>hola</h2>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CheckoutPage;
