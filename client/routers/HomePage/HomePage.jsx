import React from "react";
import Button from "react-bootstrap/Button";
import Footer from "../../components/Footer/Footer";
import designer from "./programador-sf.png";
import "./Home.css";
import Slider from "../../components/Carousel/Slider";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import curvaHome from "./curva-home.png";

const HomePage = () => {

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <section>
      <section className="seccion-header-article">
        <Header />
        <article className="presentacion">
          <h1 className="titulo">Hola, Soy Omar</h1>
          <h1 className="titulo">Un desarrollador web</h1>
          <h2 className="subtitulo">
            Soy un desarrollador full-stack al que le encanta crear aplicaciones
            web divertidas, accesibles y atractivas que den vida a los
            productos.
          </h2>
          <div className="div-img">
            <img className="img-design" src={designer} alt="imagen-diseñador" />
          </div>
        </article>
      </section>
      <div>
        <img className="curva-home" src={curvaHome} alt="separador curvado" />
      </div>
      <aside className="apartado">
        <Accordion className="acordeon">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <span className="acordeon-header">
                ¡Impulsa tu idea en línea!
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <h6 className="titulo-aside">
                Ya sea que tengas una idea clara o solo una vaga noción de lo
                que necesitas, podemos trabajar juntos para crear un sitio web
                impresionante y personalizado que se adapte a tus necesidades y
                presupuesto.
              </h6>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <span className="acordeon-header">
                ¡Vamos a crear algo increíble juntos!
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <h6 className="titulo-aside">
                Desde la creación de un blog sencillo hasta una tienda de
                ecommerce completa. No tienes que preocuparte, estoy aquí para
                hacer todo el proceso divertido y fácil para ti.
              </h6>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <span className="acordeon-header">
                ¡Hagamos que tu negocio destaque en la web!
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <h6 className="titulo-aside">
                Así que, ¿qué dices? ¿Te animas a dar el primer paso para
                mejorar tu presencia en línea? ¡Elige tu pack hoy mismo y
                hablemos sobre cómo puedo ayudarte a llevar tu negocio o idea al
                siguiente nivel!
              </h6>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="div-slider">
          <section className="seccion-slider">
            <Slider />
          </section>
        </div>
      </aside>

      <Link onClick={handleScrollToTop} to={"/about"} className="link-button">
        <Button className="boton-mas">Conóceme más</Button>
      </Link>

      <Footer />
    </section>
  );
};

export default HomePage;
