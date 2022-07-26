import React from 'react';
import '../Style/Nav.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h1>
        <a href="#/" className="navbar-brand">Gustavo</a>
      </h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a href="#Sobre" className="nav-link">Sobre Mim</a>
          </li>
          <li className="nav-item">
            <a href="#Projetos" className="nav-link">Projetos</a>
          </li>
          <li className="nav-item">
            <a href="#Habilidades" className="nav-link">Habilidades</a>
          </li>
          <li className="nav-item">
            <a href="#Contato" className="nav-link">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
