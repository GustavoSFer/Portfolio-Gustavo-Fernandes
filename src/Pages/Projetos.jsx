import React, { useEffect, useState } from 'react';
import CardProject from '../Components/CardProject';
import '../Style/Projetos.css';
import db from '../BancoDeDados/projects.json';

function Projetos() {
  const [dataProjct, setDataProject] = useState([]);

  const requestData = () => {
    setDataProject(db);
  };

  useEffect(() => {
    requestData();
  }, []);

  return (
    <div className="project">
      <div className="txt-cabecalho">
        <h1 className="txt-h1">Meus Projetos</h1>
        <h2 className="txt-h2">Projetos</h2>
      </div>
      <div className="margin-txt">
        <p>Para visualizar, clique em cima do card para abrir a página do projeto.</p>

        <div className="conatiner-project">
          {
            dataProjct.length > 0
              ? dataProjct.map((item) => <CardProject data={item} key={item.id} />)
              : <h3>Sem Projetos!</h3>
          }
        </div>
      </div>
    </div>
  );
}

export default Projetos;
