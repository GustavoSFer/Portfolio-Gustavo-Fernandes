import React from 'react';
import '../Style/RedesSociais.css';

function RedesSociais() {
  return (
    <div className="position-rede">
      <a
        href="https://github.com/GustavoSFer"
        target="_blank"
        rel="noreferrer"
      >
        <div className="container-contato m-5 img-1" />
      </a>
      <a
        href="https://www.linkedin.com/in/gustavo-dos-santos-fernandes/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="container-contato m-5 img-2" />
      </a>
    </div>
  );
}

export default RedesSociais;
