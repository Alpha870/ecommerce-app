import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import foto from "./perfil.png";
import pilares from "./pilares.png";
import "./About.css";


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
                Mi pasion siempre han sido las tecnologias, esta curiosidad fue
                la que hizo adentrarme en este sector.
              </p>
              <p className="descrip-about-enfoque">
                Hoy en dia me enfoco en profundizar en la especializacion de
                estas tecnologias para estar mejorando en mi dia a dia y
                paralelamente mi curiosidad natural hace adentrarme en la rama
                de ciberseguridad para hacer de mi un mejor profesional.
              </p>
            </article>
          </div>
        </section>

        <aside>
          <img src={pilares} alt="imagen 4 pilares" />
          <h6>
            <span>01 Estrategia</span>Antes de comenzar cualquier proyecto web,
            es importante definir una estrategia clara que establezca los
            objetivos, el público objetivo y la forma en que se medirán los
            resultados. Esta estrategia debe ser flexible y adaptarse a las
            necesidades cambiantes del mercado y del público objetivo.
          </h6>
          <h6>
            <span>02 Diseño</span> Como desarrollador web, debo asegurarme de
            que el diseño de la página sea atractivo, fácil de navegar y
            accesible en diferentes dispositivos y tamaños de pantalla para
            atraer y mantener la atención de los visitantes.
          </h6>

          <h6>
            <span>03 Contenido</span> El contenido debe ser de calidad y que sea
            relevante para la audiencia y esté optimizado para motores de
            búsqueda. Un buen contenido debe ser claro, conciso y fácil de
            entender para mantener a los visitantes interesados.
          </h6>

          <h6>
            <span>04 Marketing</span> Aunque hay una parte de marketing que
            pertence al cliente, insisto en la importancia de tener en cuenta
            las diferentes herramientas de marketing disponibles, como SEO, SEM,
            redes sociales, entre otras, y utilizarlas de manera efectiva para
            aumentar la visibilidad del sitio web y atraer a nuevos usuarios.
          </h6>
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
