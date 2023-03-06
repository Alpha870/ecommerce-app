import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [year, setYear] = useState("");

  const getYear = () => {
    const fechaActual = new Date();
    setYear(fechaActual.getFullYear());
  };
  useEffect(() => {
    getYear();
  }, []);

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#223378"
          fill-opacity="1"
          d="M0,256L48,240C96,224,192,192,288,202.7C384,213,480,267,576,266.7C672,267,768,213,864,208C960,203,1056,245,1152,261.3C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <footer className="footer">
        <div>
          <h6>
            <p>© {year} Omar Pérez · Binéfar</p>
          </h6>
        </div>

        <section className="contacto">
          <ul>
            <h6>Nos gustaria contratarte</h6>
            <li className="icons">
              <a href="https://github.com/Alpha870">
                <i className="bx bxl-github" id="github"></i>
                <span>GitHub</span>
              </a>
            </li>
            <li className="icons">
              <i className="bx bxs-file-doc"></i>
              <span>Leer.cv</span>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
};

export default Footer;
