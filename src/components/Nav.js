import { useState } from 'react';
import { Link } from 'react-router-dom';

import Menu from '../img/menu.svg'
import Close from '../img/close.svg'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <img onClick={() => setMenuOpen(true)} src={Menu} alt="menu_btn" className="menu-button" />
      </nav>
      <div className="menu-slider" style={{width: menuOpen ? '220px' : '0px'}}>
        <img onClick={() => setMenuOpen(false)} src={Close} alt="zatvori" className="close-button" />
        <ul>
          <li>
            <Link to="/">Početna</Link>
          </li>
          <li>
            <Link to="/valute">Valute</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
