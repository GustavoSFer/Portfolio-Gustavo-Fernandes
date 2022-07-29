import React, { useState, useEffect } from 'react';
import ProgressSkills from '../Components/ProgressSkills';
import skillDB from '../BancoDeDados/skills.json';
import '../Style/Habilidades.css';

function Habilidades() {
  const [skillState, setSkillState] = useState([]);

  const handleClickHard = () => {
    setSkillState(skillDB);
  };

  useEffect(() => {
    handleClickHard();
  }, []);

  return (
    <main className="container-habilidades">
      <div className="txt-cabecalho">
        <h1 className="txt-h1">Habilidades</h1>
        <h2 className="txt-h2">Skills</h2>
      </div>

      <div className="container-progress d-flex flex-wrap justify-content-between">
        {
          skillState ? skillState.map((skill) => (
            <ProgressSkills data={skill} key={skill.name} />
          )) : <h1>Sem Skill cadastrado</h1>
        }
      </div>

    </main>
  );
}

export default Habilidades;
