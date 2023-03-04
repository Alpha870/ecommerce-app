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
            <i class="bx bxs-file-doc"></i>
            <span>Leer.cv</span>
          </li>
        </ul>
        
      </section>
    </footer>
  );
};

export default Footer;
