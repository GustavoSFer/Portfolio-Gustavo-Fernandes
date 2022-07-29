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
    <main className="project">
      <div className="txt-cabecalho">
        <h1 className="txt-h1">Meus Projetos</h1>
        <h2 className="txt-h2">Projetos</h2>
      </div>
      <div className="proj">
        <div className="div">
          <p className="margin-txt">Para visualizar, clique em cima do card para abrir a página do projeto.</p>
        </div>

        <section className="conatiner-project">
          {
            dataProjct.length > 0
              ? dataProjct.map((item) => <CardProject data={item} key={item.id} />)
              : <h3>Sem Projetos!</h3>
          }
        </section>
      </div>
    </main>
  );
}

export default Projetos;
