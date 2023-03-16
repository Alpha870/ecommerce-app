import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import foto from "./perfil.png";
import "./About.css";
import Popup from "../Tools/Popup/Popup";
import pilar from "./pilar-sf.png";
import Footer from "../Footer/Footer";
import cola from "./cola.png";
import cima from "./cima.jpg";

const About = () => {
  const [temp, setTemp] = useState(null);

  const tiempo = async () => {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=41.85&longitude=0.29&hourly=temperature_2m&forecast_days=1";
    const resp = await fetch(url);
    const data = await resp.json();
    setTemp(data.hourly.temperature_2m[11]);
  };

  useEffect(() => {
    tiempo();
  }, []);

  const mis = {
    title: "01 Estrategia",
    body: `Antes de comenzar cualquier proyecto web,
    es importante definir una estrategia clara que establezca los
    objetivos, el público objetivo y la forma en que se medirán los
    resultados. Esta estrategia debe ser flexible y adaptarse a las
    necesidades cambiantes del mercado y del público objetivo.`,
    button: "MIS",
  };
  const cuatro = {
    title: "02 Diseño",
    body: `Como desarrollador web, debo asegurarme de
    que el diseño de la página sea atractivo, fácil de navegar y
    accesible en diferentes dispositivos y tamaños de pantalla para
    atraer y mantener la atención de los visitantes.`,
    button: "CUATRO",
  };
  const grandes = {
    title: "03 Contenido",
    body: `El contenido debe ser de calidad y que sea
    relevante para la audiencia y esté optimizado para motores de
    búsqueda. Un buen contenido debe ser claro, conciso y fácil de
    entender para mantener a los visitantes interesados.`,
    button: "GRANDES",
  };
  const pilares = {
    title: "04 Marketing",
    body: `Aunque hay una parte de marketing que
    pertence al cliente, insisto en la importancia de tener en cuenta
    las diferentes herramientas de marketing disponibles, como SEO, SEM,
    redes sociales, entre otras, y utilizarlas de manera efectiva para
    aumentar la visibilidad del sitio web y atraer a nuevos usuarios.`,
    button: "PILARES",
  };

  return (
    <>
      <section className="section-quienSoy">
        <Header />
        <h1 className="titulo-about">¿Quien soy?</h1>
        <div className="div-foto-descripcion">
          <img className="foto-about" src={foto} alt="foto-personal" />
          <article className="div-about-texto">
            <h2 className="subtitulo-about">
              Soy Omar Pérez, un desarrollador con el stack MERN que trabaja a
              tu lado {temp ? `a ${Math.round(temp)}°C en` : "desde"} Huesca,
              España
            </h2>

            <p className="descrip-about-pasion">
              Desde siempre, me ha apasionado entender cómo el ser humano y la
              máquina pueden comunicarse. Fue esta curiosidad la que me impulsó
              a adentrarme en el sector de la tecnología y explorar todas las
              posibilidades que ofrece.
            </p>
            <p className="descrip-about-enfoque">
              Actualmente, mi enfoque se centra en profundizar en la
              especialización de estas tecnologías para mejorar continuamente en
              mi dia a dia. Además, mi curiosidad natural me lleva a explorar la
              rama de la ciberseguridad, con el objetivo de convertirme en un
              profesional más completo y capaz.
            </p>
          </article>
        </div>
      </section>
      <aside className="aside-pilares">
        <h1 className="titulo-pilares">Pienso que...</h1>
        <section className="about-pilares">
          <div className="div-pilares1">
            <Popup title={mis.title} body={mis.body} button={mis.button} />
            <img className="img-pilar" src={pilar} alt="imagen pilar" />
          </div>
          <div className="div-pilares2">
            <Popup
              title={cuatro.title}
              body={cuatro.body}
              button={cuatro.button}
            />
            <img className="img-pilar" src={pilar} alt="imagen pilar" />
          </div>
          <div className="div-pilares3">
            <Popup
              title={grandes.title}
              body={grandes.body}
              button={grandes.button}
            />
            <img className="img-pilar" src={pilar} alt="imagen pilar" />
          </div>
          <div className="div-pilares4">
            <Popup
              title={pilares.title}
              body={pilares.body}
              button={pilares.button}
            />
            <img className="img-pilar" src={pilar} alt="imagen pilar" />
          </div>
        </section>
      </aside>

      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#223378"
            fill-opacity="1"
            d="M0,32L1440,160L1440,0L0,0Z"
          ></path>
        </svg>
        <h1 className="titulo-pilares">Cuando desconecto...</h1>
        <h5 className="descrip-about-desconecto">
          Fuera del trabajo, disfruto de otras de mis 2 grandes pasiones mi
          familia y es estar rodeado de naturaleza y poder escaparme a hacer
          trekking hace que mis pilas se recarguen.
        </h5>
        <h5 className="descrip-about-desconecto">
          Siempre acompañado de una buena taza de café...
        </h5>
        <div className="div-imagenes-desconecto">
          <figure className="figure-desc">
            <figcaption className="figcaption-desc">Cascada Cola de Caballo</figcaption>
            <img className="img-desc" src={cola} alt="cola de caballo" />
          </figure>
          <figure className="figure-desc">
            <figcaption className="figcaption-desc">Cima Peña Montañesa</figcaption>
            <img className="img-desc" src={cima} alt="cima peña montañesa" />
          </figure>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
