import React, { useEffect, useState } from "react";
import curva from "./curva.png";
import "../Footer/my-footer.css";

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
      <img className="curva-footer" src={curva} alt="curva separadora" />
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
              <a href="https://github.com/omarPerez1987">
                <i className="bx bxl-github" id="github"></i>
                <span>GitHub</span>
              </a>
            </li>
            <li className="icons">
              <a href="https://drive.google.com/file/d/1f1NkUj27loZEwtsA9I8goVXM0cuIa_t1/view?usp=sharing">
                <i className="bx bxs-file-doc" id="github"></i>
                <span>Leer.cv</span>
              </a>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
};

export default Footer;
