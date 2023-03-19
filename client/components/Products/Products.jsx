import React from "react";
import "./products.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CardProduct from "../Tools/CardProduct/CardProduct";
import img from "../Tools/Carousel/img/Data.png";

const Products = () => {
  return (
    <section className="section-products">
      <Header />
      <article className="article-products">
        <h2>Elige tu pack</h2>
        <div className="div-products">
          <CardProduct
            image={img}
            title={"Titulo1"}
            text={"Un dia precioso en el campo"}
          />
          <CardProduct
            image={img}
            title={"Titulo2"}
            text={"Un dia precioso en el campo"}
          />
          <CardProduct
            image={img}
            title={"Titulo3"}
            text={"Un dia precioso en el campo"}
          />
        </div>
      </article>
      <Footer />
    </section>
  );
};

export default Products;
