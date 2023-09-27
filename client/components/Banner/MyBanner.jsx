import React, { useEffect, useState } from "react";
import "./MyBanner.css";

import Logos_back from "./imgBanner/logos_back.png";
import Face_back_left from "./imgBanner/face_back_left.png";
import Face_front_left from "./imgBanner/face_front_left.png";
import Face_back_right from "./imgBanner/face_back_right.png";
import Face_front_right from "./imgBanner/face_front_right.png";
import Logo_front from "./imgBanner/logos_front.png";
import TitleBanner from "../BannerTitle/BannerTitle.jsx";

export default function MyBanner() {
  const [mouseOverFaceBack, setMouseOverFaceBack] = useState(false);
  const [mouseOverFaceFront, setMouseOverFaceFront] = useState(false);

  const [timeAnimationIntro, setTimeAnimationIntro] = useState(true);

  useEffect(() => {
    const animationIntroTimer = setTimeout(() => {
      setTimeAnimationIntro(false);
    }, 2000);

    return () => {
      clearTimeout(animationIntroTimer);
    };
  }, []);

  return (
    <main className="main-container">
      <div className="div-banner">
        {/* ******** TITLE BANNER *************************************************************** */}

        <TitleBanner
          title="/ BACKEND /"
          description="Desarrollador backend que construye la infraestructura robusta, segura y optimizada"
          timeAnimationIntro={timeAnimationIntro}
          mouseOver={mouseOverFaceFront}
        />
      </div>
      <div className="div-banner">
        <TitleBanner
          title={`< FRONTEND />`}
          description="Desarrollador front-end que crea diseños elegantes, interactivos y responsivos"
          timeAnimationIntro={timeAnimationIntro}
          mouseOver={mouseOverFaceBack}
        />
      </div>

      {/* ******* PART LEFT BANNER ******************************************** */}

      {timeAnimationIntro ? (
        <section
          className={`container-back ${mouseOverFaceBack ? "hovered" : ""}`}
          onMouseEnter={() => {
            setMouseOverFaceBack(true);
            setMouseOverFaceFront(false);
          }}
          onMouseLeave={() => setMouseOverFaceBack(false)}
        >
          <img
            src={Logos_back}
            alt="letras codigo backend"
            style={{
              width: "60%",
              opacity: 0,
              animation:
                "flash 150ms 0.5s 2 linear, watch 150ms 1.2s 1 linear forwards",
            }}
          />
          <img
            src={Face_back_left}
            alt="cara hombre con barba represenatada como arte"
            style={{
              width: "40%",
              opacity: 0,
              animation:
                "flash 150ms 1.2s 2 linear, watch 150ms 1.7s 1 linear forwards",
            }}
          />
        </section>
      ) : (
        <section
          className={`container-back ${mouseOverFaceBack ? "hovered" : ""}`}
          onMouseEnter={() => {
            setMouseOverFaceBack(true);
            setMouseOverFaceFront(false);
          }}
          onMouseLeave={() => setMouseOverFaceBack(false)}
          style={{
            animation: mouseOverFaceFront ? "smoke 800ms 1 linear" : "",
          }}
        >
          <img
            src={Logos_back}
            alt="letras codigo backend"
            style={{
              width: "60%",
              opacity: mouseOverFaceFront ? 0 : 1,
              animation: mouseOverFaceBack ? "smoke 800ms 1 linear" : "",
            }}
          />

          <img
            src={mouseOverFaceFront ? Face_front_left : Face_back_left}
            alt="cara hombre con barba represenatada como arte"
            style={{
              width: "40%",
              animation: mouseOverFaceBack ? "smoke 800ms 1 linear" : "",
            }}
          />
        </section>
      )}

      {/* *** PART RIGHT BANNER ****************************************************** */}

      {timeAnimationIntro ? (
        <section
          className={`container-front ${mouseOverFaceFront ? "hovered" : ""}`}
          onMouseEnter={() => {
            setMouseOverFaceBack(false);
            setMouseOverFaceFront(true);
          }}
          onMouseLeave={() => setMouseOverFaceFront(false)}
        >
          <img
            src={Face_front_right}
            alt="cara hombre con barba"
            style={{
              width: "40%",
              opacity: 0,
              animation:
                "flash 150ms 1s 2 linear, watch 150ms 1.5s 1 linear forwards",
            }}
          />
          <img
            src={Logo_front}
            alt="fragmento codigo frontend"
            style={{
              width: "60%",
              opacity: 0,
              animation:
                "flash 150ms 2 linear, watch 150ms 0.8s 1 linear forwards",
            }}
          />
        </section>
      ) : (
        <section
          className={`container-front  ${mouseOverFaceFront ? "hovered" : ""}`}
          onMouseEnter={() => {
            setMouseOverFaceBack(false);
            setMouseOverFaceFront(true);
          }}
          onMouseLeave={() => setMouseOverFaceFront(false)}
          style={{
            animation: mouseOverFaceBack ? "smoke 800ms 1 linear" : "",
          }}
        >
          <img
            src={mouseOverFaceBack ? Face_back_right : Face_front_right}
            alt="cara hombre con barba"
            style={{
              width: "40%",
              animation: mouseOverFaceFront ? "smoke 800ms 1 linear" : "",
            }}
          />
          <img
            src={Logo_front}
            alt="fragmento codigo frontend"
            style={{
              animation: mouseOverFaceFront ? "smoke 800ms 1 linear" : "",
              width: "60%",
              opacity: mouseOverFaceBack ? 0 : 1,
            }}
          />
        </section>
      )}
    </main>
  );
}
