// PrincipalPage.js

import React from 'react';
import './principal.css'; 

const PrincipalPage = () => {
  return (
    <div>
      <header>
        <img src="imagenes/logo.png" alt="" className="logo" />
        <h1>Secretaría ULEAM</h1>
        <nav className="navbar">
          <ul>
            <Link className='li-a' to="/sesion">Login</Link>
          </ul>
        </nav>
      </header>

      <div>
        <nav>
          <a href="registro_datos.html">Registro de Datos</a>
          <a href="servicios.html">Servicios</a>
          <a href="consultas.html">Consultas</a>
        </nav>
      </div>

      <section className="inicio">
        <div className="secretaria-conten container">
          <h2>Universidad Eloy Alfaro de Manabi (ULEAM)</h2>
          <h3>Secretaria Virtual</h3>

          <p className="txt-p">
            Desde la ULEAM hemos dado un paso más en nuestro intento por estar a tu disposición a todo momento.
            Para ello hemos creado la Secretaría Virtual, desde donde podrás realizar trámites, gestiones y consultas
            telemáticamente sin que tengas que desplazarte. Entre los servicios que proporcionamos están:
          </p>
        </div>
      </section>

      <section className="servicios container">
        <div className="servicios-contenido">
          <div className="centrado">
            <div className="contenedor">
              <div className="fila">
                <div className="cuadro">
                  <img src="imagenes/cita.jpg" alt="" />
                  <p>Cita Previa</p>
                  <a href="cita.html" className="btn-1">ACCEDER</a>
                </div>

                <div className="cuadro">
                  <img src="imagenes/certificado.jfif" alt="" />
                  <p className="parrafo_1">Certificado Académico</p>
                  <a href="servicios.html" className="btn-1">ACCEDER</a>
                </div>

                <div className="cuadro">
                  <img src="imagenes/otros.jpg" alt="" />
                  <p className="parrafo">Otras Gestiones</p>
                  <a href="servicios.html" className="btn-1">ACCEDER</a>
                </div>
              </div>

              <div className="fila">
                <div className="cuadro">
                  <img src="imagenes/estudiante.jpg" alt="" />
                  <p className="parrafo_2">Estudiantes</p>
                  <a href="servicios.html" className="btn-1">ACCEDER</a>
                </div>

                <div className="cuadro">
                  <img src="imagenes/docente.png" alt="" />
                  <p>Docentes</p>
                  <a href="servicios.html" className="btn-1">ACCEDER</a>
                </div>

                <div className="cuadro">
                  <img src="imagenes/egresados.jpeg" alt="" />
                  <p>Egresado</p>
                  <a href="servicios.html" className="btn-1">ACCEDER</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        &copy; 2023 Secretaría ULEAM. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default PrincipalPage;
