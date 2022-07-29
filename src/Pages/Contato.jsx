import React from 'react';
import phone from '../images/telephone.png';
import linkedin from '../images/linkedin1.png';
import github from '../images/github1.png';
import '../Style/Contato.css';

function Contato() {
  return (
    <div className="container-habilidades">
      <div className="txt-cabecalho">
        <h1 className="txt-h1">Contato</h1>
        <h2 className="txt-h2">Contato</h2>
      </div>

      <div className="container-contato">
        <div className="espaco">

          <div className="card">
            <img src={phone} alt="...." className="img-telephone" />
            <div className="content">
              <h3>(11) 95895-1429</h3>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/gustavo-dos-santos-fernandes/"
            target="_blank"
            rel="noreferrer"
            className="card"
          >
            <img src={linkedin} alt="...." className="img-telephone" />
            <div className="content">
              <h3>LinkedIn</h3>
            </div>
          </a>

          <a
            href="https://github.com/GustavoSFer"
            target="_blank"
            rel="noreferrer"
            className="card"
          >
            <img src={github} alt="...." className="img-telephone" />
            <div className="content">
              <h3>GitHub</h3>
            </div>
          </a>
        </div>

      </div>
      hdfushus
    </div>
  );
}

export default Contato;
