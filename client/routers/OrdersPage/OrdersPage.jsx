import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import useAuth from "../../auth/useAuth";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const OrdersPage = () => {
  const { user, setUser } = useAuth();
  const [orders, setOrders] = useState(null);

  //****MOSTRAR****/
  const getAllOrders = async () => {
    const url = `${import.meta.env.VITE_BASE_URL}orders/getAll?userId=${
      user.id
    }`;
    const result = await axios.get(url);
    const res = result.data.allOrders;
    setOrders(res);
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <>
      <Header />
      <section
        style={{
          minHeight: '65vh',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          textAlign: "center",
        }}
      >
        <h2>Hola, {user.nombre} estos son tus pedidos.</h2>
        {orders &&
          orders.map((item, index) => (
            <Card key={index} style={{ width: "18rem" }}>
              <Card.Header>
                Pedido realizado {item.createdAt.slice(0, 10)}{" "}
                {item.createdAt.slice(11, 16)}
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Contratado: {item.productos[0].nombre}
                </ListGroup.Item>
                <ListGroup.Item>
                  Precio: {item.productos[0].precio}€
                </ListGroup.Item>
                <ListGroup.Item>
                  Fecha de entrega en: {item.productos[0].fechaEntrega} dias
                </ListGroup.Item>
              </ListGroup>
            </Card>
          ))}
      </section>
      <Footer />
    </>
  );
};

export default OrdersPage;
