import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import foto from "./perfil.png";
import "./About.css";
import Popup from "../Tools/Popup/Popup";
import pilar from "./pilar-sf.png";

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
  const pilares = {
    title: "03 Contenido",
    body: `El contenido debe ser de calidad y que sea
    relevante para la audiencia y esté optimizado para motores de
    búsqueda. Un buen contenido debe ser claro, conciso y fácil de
    entender para mantener a los visitantes interesados.`,
    button: "PILARES",
  };
  const fundamentales = {
    title: "04 Marketing",
    body: `Aunque hay una parte de marketing que
    pertence al cliente, insisto en la importancia de tener en cuenta
    las diferentes herramientas de marketing disponibles, como SEO, SEM,
    redes sociales, entre otras, y utilizarlas de manera efectiva para
    aumentar la visibilidad del sitio web y atraer a nuevos usuarios.`,
    button: "FUNDAMENTALES",
  };

  return (
    <main>
      <article>
        <section className="section-quienSoy">
          <Header />
          <h1 className="titulo-about">¿Quien soy?</h1>
          <div className="div-foto-descripcion">
            <img className="foto-about" src={foto} alt="foto-personal" />
            <article className="div-about-texto">
              <h2 className="subtitulo-about">
                Soy Omar Pérez, un desarrollador con el stack MERN que trabaja a
                tu lado desde {temp ? `${Math.round(temp)}°C en` : ""} Huesca,
                España
              </h2>

              <p className="descrip-about-pasion">
                Desde siempre, me ha apasionado entender cómo el ser humano y la
                máquina pueden comunicarse. Fue esta curiosidad la que me
                impulsó a adentrarme en el sector de la tecnología y explorar
                todas las posibilidades que ofrece.
              </p>
              <p className="descrip-about-enfoque">
                Actualmente, mi enfoque se centra en profundizar en la
                especialización de estas tecnologías para mejorar continuamente
                en mi dia a dia. Además, mi curiosidad natural me lleva a
                explorar la rama de la ciberseguridad, con el objetivo de
                convertirme en un profesional más completo y capaz.
              </p>
            </article>
          </div>
        </section>
        <aside>
          <section className="about-pilares">
            <div className="div-pilares">
              <Popup title={mis.title} body={mis.body} button={mis.button} />
              <img className="img-pilar" src={pilar} alt="imagen pilar" />
            </div>
            <div className="div-pilares">
              <Popup
                title={cuatro.title}
                body={cuatro.body}
                button={cuatro.button}
              />
              <img className="img-pilar" src={pilar} alt="imagen pilar" />
            </div>
            <div className="div-pilares">
              <Popup
                title={pilares.title}
                body={pilares.body}
                button={pilares.button}
              />
              <img className="img-pilar" src={pilar} alt="imagen pilar" />
            </div>
            <div className="div-pilares">
              <Popup
                title={fundamentales.title}
                body={fundamentales.body}
                button={fundamentales.button}
              />
              <img className="img-pilar" src={pilar} alt="imagen pilar" />
            </div>
          </section>
        </aside>

        <div>
          <h5>
            Fuera del trabajo, disfruto de otras de mis 2 grandes pasiones mi
            familia y es estar rodeado de naturaleza y poder escaparme a hacer
            trekking hace que mis pilas se recarguen.
          </h5>
        </div>
      </article>
    </main>
  );
};

export default About;
