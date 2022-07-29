import React from 'react';
import gustavo from '../images/sobre.jpeg';
import '../Style/Sobre.css';

function Sobre() {
  return (
    <header className="row mt-5">
      <section className="col sec2">
        <img src={gustavo} alt="foto ilustrativa sobre o personagem" className="img-sobre" />
      </section>
      <section className="col text-center">
        <div className="txt-cabecalho">
          <h1 className="txt-h1">Quem sou eu</h1>
          <h2 className="txt-h2">Sobre mim</h2>
        </div>
        <div className="txt-text">
          <p>
            Sou uma pessoa apaixonado pela tecnologia!!!
          </p>
          <p>
            Gosto de gerar novas ideias e desenvolver soluções viáveis para problemas
            amplamente relevantes.
          </p>
          <p>
            Adoro ensinar pessoas e compartilhar conhecimentos, de forma que cada
            troca acrescenta um aprendizado para cada um de nós.
          </p>
          <p>
            Formado em Desenvolvimento web pela escola
            <span className="fw-bolder"> Trybe</span>
            . Antes disso começei a faculdade de Ciências da computação pela Universidade
            Anhembi Morumbi. Resolvi tranca-la para começar o curso na Trybe, mas pretendo
            retornar.
          </p>
          <p>
            Sempre em busca de novos desafios, aprendendo a cada dia em plataformas
            como Udemy, Digital Inovation One, Fundação Bradesco entre outros...
          </p>
          <div className="rede-linkedin">
            <h4>Entrar em contato:</h4>
            <h1>
              <a
                className="txt-h1"
                href="https://www.linkedin.com/in/gustavo-dos-santos-fernandes/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </h1>
            <h2 className="txt-h2">
              LinkedIn
            </h2>
          </div>
          <div className="rede-github">
            <h1>
              <a
                className="txt-h1"
                href="https://github.com/GustavoSFer"
                target="_blank"
                rel="noreferrer"

              >
                GitHub
              </a>
            </h1>
            <h2 className="txt-h2">
              GitHub
            </h2>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Sobre;
