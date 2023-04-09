import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import useAuth from "../../auth/useAuth";

const OrdersPage = () => {
  const { user, setUser } = useAuth();
  const [orders, setOrders] = useState(null);

  //****MOSTRAR****/
  const getAllOrders = async () => {
    const url = `${import.meta.env.VITE_BASE_URL}orders/getAll?userId=${user.id}`;
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
      <h2>Hola, {user.nombre} estos son tus pedidos</h2>
      {orders &&
        orders.map((item, index) => (
          <div key={index}>
            <h6>Pedido realizado: {item.createdAt.slice(0, 10)}</h6>
            <h6>{item.usuarioID.nombre}</h6>
            <h6>{item.productos[0].nombre}</h6>
            <h6>{item.productos[0].precio}€</h6>
            <h6>{item.productos[0].fechaEntrega} dias</h6>
          </div>
        ))}
      <Footer />
    </>
  );
};

export default OrdersPage;
