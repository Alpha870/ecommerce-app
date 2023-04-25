import React, { useEffect, useState } from "react";
import Header from "../../components/Header/MyHeader";
import foto from "./perfil.png";
import "./About.css";
import Popup from "../../components/PopUp/PopUp";
import pilar from "./pilar-sf.png";
import Footer from "../../components/Footer/MyFooter";
import cola from "./cola.png";
import cima from "./cima.jpg";
import separador from "./separador.png";

import landing from "../../components/CardProjects/imgAbout/landing.png";
import likes from "../../components/CardProjects/imgAbout/Likes&Moves.png";
import dashboard from "../../components/CardProjects/imgAbout/dashboard.png";
import kiu from "../../components/CardProjects/imgAbout/restaurantKiu.png";
import personal from "../../components/CardProjects/imgAbout/personal.png";
import certifLanding from "../../components/CardProjects/imgCertificates/landing.png";
import certifDashboard from "../../components/CardProjects/imgCertificates/dashboard.png";
import certifRestaurant from "../../components/CardProjects/imgCertificates/restaurant.png";
import CardProyects from "../../components/CardProjects/CardProyects";

const AboutPage = () => {
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

      <section className="mis-proyectos">
        <img style={{ width: "100%" }} src={separador} alt="separador " />
        <h1 className="titulo-pilares">Algunos de mis proyectos...</h1>
        <div className="div-cards">
          <CardProyects
            width={"25rem"}
            image={personal}
            nombre={"Codework"}
            subtitle={"Personal page ⭐⭐⭐⭐⭐"}
            text={
              <>
                <strong>¡Este proyecto es el que más me enorgullece!</strong>{" "}
                Diseñé y desarrollé varias rutas generales para mejorar la
                experiencia del usuario. Con rutas para administrador, usuarios
                registrados y visitantes no registrados.
                <br />
                <strong>El backend</strong> fue creado utilizando{" "}
                <strong>Node.js</strong> con el popular framework{" "}
                <strong>Express</strong>. Creé modelos tanto para users,
                products y orders relacionando esta última para que el cliente
                pueda visualizar sus pedidos una vez hechos. Me comuniqué con la
                base de datos <strong>MongoDB</strong> utilizando{" "}
                <strong>Mongoose</strong>, un ODM muy conocido.
                <br />
                Por otro lado, en <strong>el frontend</strong> utilicé{" "}
                <strong>React como librería de JavaScript</strong>. Usé React
                Router para las rutas del cliente y React-Bootstrap para dar
                estilo de forma más rápida.{" "}
                <strong>
                  Este proyecto seguirá creciendo a medida que vaya obteniendo
                  nuevas habilidades.😊
                </strong>
              </>
            }
            url={"/"}
            // certificates={}
            // urlCredly={''}
          />
          <CardProyects
            width={"25rem"}
            image={kiu}
            nombre={"Kiu restaurant"}
            subtitle={"Restaurant app"}
            text={
              <>
                Con ilusión, desarrollé una asombrosa web app que se enfoca en
                la experiencia del usuario.{" "}
                <strong>
                  Utilizando React en el frontend y conectándolo con Firebase
                </strong>
                , fui capaz de crear un sistema de registro de usuarios con
                capacidad de hacer CRUD. Sin embargo, en lugar de crear un
                simple restaurante como se nos pidió en el bootcamp, me esforcé
                por ser creativo y ofrecer algo único.
                <br />{" "}
                <strong>
                  ¡Así fue como nació mi asistente virtual Kiu!
                </strong>{" "}
                Diseñé una experiencia interactiva que sigue al usuario en cada
                paso y se asegura de que se sienta atendido en todo momento.
                Gracias a esta característica, logré que mi proyecto fuera no
                solo funcional sino también simpático y entretenido.
              </>
            }
            url={"https://restaurante-firebase.vercel.app/"}
            certificates={certifRestaurant}
            urlCredly={
              "https://www.credly.com/badges/f8c3741c-15d3-47d6-a3fb-a45dd46b7444/public_url"
            }
          />
          <CardProyects
            width={"25rem"}
            image={likes}
            nombre={"Likes&Movies"}
            subtitle={"Api YouTube"}
            text={
              <>
                Bienvenido a mi sitio web de películas,{" "}
                <strong>
                  a este proyecto lo llamaría mi mentor personal, aquí fue donde
                  realmente note un gran cambio en mi lógica de programación{" "}
                </strong>
                , profundice como funcionaba el objeto de la respuesta de las
                apis, averiguar como trabajar la query string para obtener
                cambios en mi iframe. <br />
                <strong>
                  Aprender con los hooks de React useState, useEffect,
                  useContext entre otros (literalmente me enamoré ❤) y ver lo
                  cómodo y fácil que se trabaja con JSX.
                </strong>{" "}
                <br />
                En este proyecto puedes buscar y explorar los 10 últimos
                trailers más populares de diferentes géneros. Para el frontend,
                utilicé React.js, una popular biblioteca de JavaScript para
                construir aplicaciones web.
                <br />
                También implementé Bootstrap para darle a mi sitio un diseño
                elegante y responsivo. Una vez que encuentres un tráiler qué té
                interese, puedes añadirlo a “favoritos” para que puedas guardar
                tus tráileres para acordarte del título para más tarde.
              </>
            }
            url={"https://likes-movies-alpha870.vercel.app/"}
          />
          <CardProyects
            width={"25rem"}
            image={dashboard}
            nombre={"Market Crypto"}
            subtitle={"Proyecto en equipo"}
            text={
              <>
                Este es un proyecto de dashboard que muestra información
                estadística en una tabla de datos interactiva,{" "}
                <strong>el cual fue creado en equipo</strong>. La tabla de datos
                está diseñada para que los usuarios puedan ordenar, filtrar y
                buscar información de manera rápida y sencilla.
                <br />
                Para la creación de este dashboard, utilizamos{" "}
                <strong>Vanilla JS (JavaScript puro)</strong> exceptuando
                Chart.js, una biblioteca de gráficos de JavaScript para crear
                visualizaciones de datos en tiempo real.
                <br />
                Este proyecto de dashboard
                <strong>
                  {" "}
                  a sido todo un reto aqui fue donde aprendimos a utilizar git
                  usando los merge y a tener que resolver los conflictos creados
                  por nosotros mismos😊
                </strong>
                , los usuarios pueden ver fácilmente la información relevante y
                navegar por la tabla de datos con rapidez y eficacia. Además, la
                tabla de datos es completamente responsive, lo que significa que
                se adapta a diferentes tamaños de pantalla para una
                visualización óptima.
              </>
            }
            url={"https://tabla-de-datos-dashboard.vercel.app/"}
            certificates={certifDashboard}
            urlCredly={
              "https://www.credly.com/badges/3799020a-2395-41ff-8ee0-edf719653fbd/public_url"
            }
          />
          <CardProyects
            width={"25rem"}
            image={landing}
            nombre={"TrMountain"}
            subtitle={"Landing page (diseño)"}
            text={
              <>
                Este es una landing page responsive para una tienda de ropa de
                montaña. Desde la selección de las imágenes perfectas hasta la
                implementación de las animaciones y los elementos de diseño para
                darle vida a la página. El objetivo principal era crear una
                página que no solo se vea impresionante, sino que también
                aplicara en todo el sitio la semántica del HTML5. Utilicé flexbox
                para asegurarme de que la página fuera totalmente responsive y
                para que los usuarios puedan disfrutar de una experiencia fluida
                y sin interrupciones en cualquier dispositivo. Me encantó
                experimentar con diferentes diseños y efectos para asegurarme de
                que la página sea visualmente atractiva y que capte la atención
                del usuario desde el momento en que la vea. Presenta una
                interfaz de usuario llamativa y moderna, con una combinación de
                que le dan al sitio un aspecto vivaz.
              </>
            }
            url={"https://tr-mountain.vercel.app/"}
            certificates={certifLanding}
            urlCredly={
              "https://www.credly.com/badges/935a6881-68f8-4e0e-8f0d-2a899ddc87f4/public_url"
            }
          />
        </div>
      </section>

      <section>
        <img style={{ width: "100%" }} src={separador} alt="separador " />
        <h1 className="titulo-pilares">Cuando desconecto...</h1>
        <h5 className="descrip-about-desconecto">
          Fuera del trabajo, disfruto de otras de mis 2 grandes pasiones mi
          familia/amigos y el trekking, poder estar rodeado de naturaleza y
          escaparme a hacer una ruta hace que mis pilas se recarguen.
        </h5>
        <h5 className="descrip-about-desconecto">
          Siempre rodeado de buena compañia y con una buena taza de café...
        </h5>
        <div className="div-imagenes-desconecto">
          <figure className="figure-desc">
            <figcaption className="figcaption-desc">
              Cascada Cola de Caballo
            </figcaption>
            <img className="img-desc" src={cola} alt="cola de caballo" />
          </figure>
          <figure className="figure-desc">
            <figcaption className="figcaption-desc">
              Cima Peña Montañesa
            </figcaption>
            <img className="img-desc" src={cima} alt="cima peña montañesa" />
          </figure>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
