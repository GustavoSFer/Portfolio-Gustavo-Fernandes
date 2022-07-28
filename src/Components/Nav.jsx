import React, { useState } from 'react';
import '../Style/Nav.css';

function Nav() {
  const [active, setActive] = useState(false);

  const toggleMode = () => {
    setActive(!active);
  };

  return (
    <nav className="apps">
      <div
        role="button"
        className={active ? 'icon iconActive' : 'icon'}
        onClick={toggleMode}
        onKeyDown={toggleMode}
        tabIndex={0}
      >
        <div className="hamburguer hambuerguerIcon" />
      </div>
      <div className={active ? 'menu menuOpen' : 'menu menuClose'}>
        <div className="list">
          <ul className="listItems">
            <li className="">
              <a href="#Sobre" className="">Sobre Mim</a>
            </li>
            <li className="">
              <a href="#Projetos" className="">Projetos</a>
            </li>
            <li className="">
              <a href="#Habilidades" className="">Habilidades</a>
            </li>
            <li className="">
              <a href="#Contato" className="">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
