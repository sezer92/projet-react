import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo à gauche */}
          <NavLink className="navbar-brand" to="/">
            John Doe
          </NavLink>

          {/* Liens de navigation à droite */}
          <div className="nav-links">
            <NavLink exact className="nav-link" activeClassName="active" to="/">
              Accueil
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/services">
              Services
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/portfolio">
              Réalisations
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/blog">
              Blog
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/contact">
              Me Contacter
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/mentions-legales">
              Mentions Légales
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;


