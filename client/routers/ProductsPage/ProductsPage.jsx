import React, { useEffect, useState } from "react";
import "./products.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CardProduct from "../../components/CardProduct/CardProduct";
import img from "../../components/Carousel/img/Data.png";
import axios from "axios";

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

  return (
    <section className="section-products">
      <Header />
      <article className="article-products">
        <h2>Elige tu pack</h2>
        <aside className="div-products">
          {showProduct &&
            showProduct.map((item) => (
              <div key={item._id}>
                <CardProduct
                  id={item._id}
                  image={img}
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
