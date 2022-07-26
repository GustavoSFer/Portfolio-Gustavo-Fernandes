import React from 'react';
// import Gustavo from '../images/Gustavo.png';
import '../Style/Home.css';

function Home() {
  return (
    <header className="row border border-danger">
      <section className="col border border-danger">
        <h1>Seja Bem vindo!</h1>
      </section>
      <section className="col sec2">
        {/* <img src={Gustavo} alt="Imagem Gustavo" className="img-home" /> */}
      </section>
    </header>
  );
}

export default Home;
