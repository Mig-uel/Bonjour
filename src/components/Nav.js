import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <div className="nav-links-container flex">
        <NavLink to="/" className="nav-link" activeClassName="selected">Home</NavLink>
        <NavLink to="/settings" className="nav-link" activeClassName="selected">Settings</NavLink>
      </div>
    </nav>
  );
}

export default Nav;