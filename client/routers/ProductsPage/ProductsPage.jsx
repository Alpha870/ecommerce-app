import React, { useEffect, useState } from "react";
import "./products.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CardProduct from "../../components/CardProduct/CardProduct";
import axios from "axios";
import time from "./Time.png";
import web from "./Web.png";
import store from "./Store.png";

const ProductsPage = () => {
  const [showProduct, setShowProduct] = useState([]);

  //****MOSTRAR****/
  const getAllProducts = async () => {
    const url = `${import.meta.env.VITE_BASE_URL}products/getAll`;
    const result = await axios.get(url);
    const res = result.data.allProducts;
    setShowProduct(res);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const images = [time, web, store];

  return (
    <section className="section-products">
      <Header />
        <h2 className="titulo-products">¡Haz crecer tu negocio en línea! Elige el servicio que necesitas</h2>
      <article className="article-products">
        <aside className="div-products">
          {showProduct &&
            showProduct.map((item, index) => (
              <div key={item._id}>
                <CardProduct
                  id={item._id}
                  //uso el index para iterar el array de imagenes
                  image={images[index]}
                  nombre={item.nombre}
                  subtitle={item.horas}
                  text={item.subtitulo}
                />
              </div>
            ))}
        </aside>
      </article>
      <Footer />
    </section>
  );
};

export default ProductsPage;
