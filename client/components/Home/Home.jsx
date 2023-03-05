import React from "react";
import Navbar from "../Header/Header";
import Footer from "../Footer/Footer";
import designer from "./programador.png";
import "./Home.css";
import Slider from "../Tools/Carousel/Slider";

const Home = () => {
  return (
    <section>
      <Navbar />
      <article className="presentacion">
        <h1 className="titulo">Hola, Soy Omar</h1>
        <h1 className="titulo">Un desarrollador web</h1>
        <h2 className="subtitulo">
          Soy un desarrollador full-stack al que le encanta crear aplicaciones
          web divertidas, accesibles y atractivas que den vida a los productos.
        </h2>
        <div className="div-img">
          <img className="img-design" src={designer} alt="imagen-diseñador" />
        </div>
      </article>
      <aside className="apartado">
        <h6 className="titulo-aside">
          Necesitas un blog, una landing page o una tienda de ecommerce completa
          a medida?
        </h6>
        <h6 className="titulo-aside">
          O solo necesitas añadir una funcionalidad a tu código?
        </h6>
        <div className="div-slider">
          <Slider />
        </div>
        <h6 className="titulo-aside">Elige tu servicio o pack según tus necesidades</h6>
      </aside>
      <Footer />
    </section>
  );
};

export default Home;
