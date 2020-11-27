import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/valute">Valute</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/">Početna</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
