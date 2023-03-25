import React from "react";
import "./notFoundPage.css";
import Header from "../../components/Header/Header";
import img404 from "./img404.png";
import Boton from "../../components/Boton/Boton";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="section-404">
      <Header />
      <div className="container-404">
        <h1>ERROR 404</h1>
        <h6>
          He buscado por todos lados pero no he conseguido encontrar la
          página que estas buscando. Voy a buscar un lugar mejor para ti.
        </h6>
        <img src={img404} alt="pagina no encontrada" />
        <Link to={'/'} >
        <Boton className='boton-404' type={'button'} height={'3rem'} texto={'Inicio de codeWork'}/>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
