import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../auth/useAuth";
import "./checkout.css";
import Header from "../../components/Header/MyHeader";
import Footer from "../../components/Footer/MyFooter";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import MyAlert from "../../components/Alert/MyAlert";

const initialOptions = {
  "client-id": `${import.meta.env.VITE_PAYPAL_CLIENT_ID}`,
  currency: "EUR",
  intent: "capture",
};

const CheckoutPage = () => {
    const { user, setUser } = useAuth();

  const [product, setProduct] = useState({});
  const [cart, setCart] = useState();
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  // estados paypal
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [orderID, setOrderID] = useState(false);

  // ********* MOSTRAR PRODUCTOS ***********
  const getProduct = async () => {
    const id = window.location.href.split("/").pop();
    const url = `${import.meta.env.VITE_BASE_URL}/checkout/get/${id}`;
    const result = await axios.get(url);
    const dataProduct = result.data.showProduct;
    try {
      setProduct(dataProduct);
      setCart({
        usuarioID: user.id,
        productos: [
          {
            productoID: dataProduct._id,
            nombre: dataProduct.nombre,
            precio: dataProduct.precio,
            fechaEntrega: dataProduct.terminado,
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  // **************ORDENES DE PAYPAL**************

  // Crear la orden
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: `${product.nombre}`,
            amount: {
              currency_code: "EUR",
              value: product.precio,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };
  // Aprovación
  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      const { payer } = details;
      setSuccess(true);
    });
  };

  useEffect(() => {
    if (success) {
      saveOrder();
    }
  }, [success]);

  // ************* CREACIÓN DE PEDIDOS ***************

  //****CREAR****/
  const saveOrder = async () => {
    const url = `${import.meta.env.VITE_BASE_URL}/orders/create`;
    await axios.post(url, cart);
    try {
      setSuccessAlert(true)
    } catch (error) {
      setErrorAlert(true)
    }
  };

  return (
    <>
      <Header />
      <section className="section-check">
        {product.nombre ? (
          <>
            {successAlert && (
              <MyAlert
                head={'Pedido exitoso'}
                color={"success"}
                text={`Será redirigido a sus pedidos`}
                redirect={'/orders'}
              />
            )}
            {errorAlert && (
              <MyAlert
                head={'Error'}
                color={"danger"}
                text={`Su pedido no se a podido finalizar. Vuelva a intentarlo más tarde`}
              />
            )}
            <h1 className="h1-check">Carrito de compras</h1>
            <h6>{`Hola ${user.nombre}, te agradezco que hayas 
      llegado hasta este punto completa tu compra realizando el pago`}</h6>
            <Card style={{ width: "18rem" }}>
              <Card.Header>{product.nombre}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>precio: {product.precio}€</ListGroup.Item>
              </ListGroup>
            </Card>
          </>
        ) : (
          <>
            <h1 className="h1-check">Carrito de compras vacío</h1>
            <h6>{`Hola ${user.nombre}, te agradezco que hayas 
      llegado hasta este punto, pero tu carrito está vacío`}</h6>
          </>
        )}
        <div className="div-check">
          <h6>TOTAL = {product.precio}€</h6>
          <PayPalScriptProvider options={initialOptions}>
            {cart && show ? (
              <div>
                <p>El pago es ficticio</p>
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={createOrder}
                  onApprove={onApprove}
                />
                <Button
                  onClick={() => setShow(false)}
                  variant="outline-danger"
                  size="sm"
                >
                  Cancelar
                </Button>
              </div>
            ) : (
              <Button onClick={() => setShow(true)} variant="success">
                Realizar Pago
              </Button>
            )}
          </PayPalScriptProvider>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CheckoutPage;
