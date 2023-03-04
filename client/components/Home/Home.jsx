import React from "react";
import Navbar from "../Header/Header";
import Footer from "../Footer/Footer";
import designer from "./programador.png";
import "./Home.css";

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
      <Footer />
    </section>
  );
};

export default Home;
