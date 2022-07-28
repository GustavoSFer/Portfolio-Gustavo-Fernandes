import React from 'react';
import CardProject from '../Components/CardProject';
import '../Style/Projetos.css';

function Projetos() {
  return (
    <div className="project">
      <div className="txt-cabecalho">
        <h1 className="txt-h1">Meus Projetos</h1>
        <h2 className="txt-h2">Projetos</h2>
      </div>
      <div className="margin-txt">
        <p>Para visualizar o projeto, clique em cima do projeto que gostaria de ver.</p>

        <div className="conatiner-project">
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
        </div>
      </div>
    </div>
  );
}

export default Projetos;
