import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Zoom from 'react-reveal/Zoom';
import Gustavo from '../images/Gustavo.png';
import trybe from '../images/trybe.png';
import devPc from '../images/dev-pc.png';
import dio from '../images/dio.png';
import '../Style/Carrosel.css';
import RedesSociais from './RedesSociais';

function Carrosel() {
  return (
    <div className="row align-items-center container-top">
      <Zoom>
        <div className="col width-ms">
          <Carousel>
            <Carousel.Item>
              <img src={devPc} alt="Imagem escola Trybe" className="img-carrosel2" />
              <Carousel.Caption className="">
                <p className="txt-p">Olá!</p>
                <h3 className="txt-descricao">
                  Eu sou o
                  <span> Gustavo Fernandes</span>
                </h3>
                <p className="txt-p">
                  Programador Web
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img src={trybe} alt="Imagem escola Trybe" className="img-carrosel" />
              <Carousel.Caption className="">
                <p className="txt-p">Formado</p>
                <h3 className="txt-descricao">
                  Desenvolvedor
                  <span> Web FullStack</span>
                </h3>
                <p className="txt-p">
                  Pela escola
                  <span> Trybe</span>
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img src={dio} alt="Imagem escola Trybe" className="img-carrosel" />
              <Carousel.Caption className="">
                <p className="txt-p">Autodidata</p>
                <h3 className="txt-descricao">
                  Força de
                  <span> vontade </span>
                  e
                  <span> persistência </span>
                  em aprender.
                </h3>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </div>
      </Zoom>
      <Zoom>
        <div className="col display">
          <div className="row">
            <div className="col">
              <img src={Gustavo} alt="Imagem Gustavo" className="img-home" />
            </div>
            <div className="col">
              <RedesSociais />
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
}

export default Carrosel;
