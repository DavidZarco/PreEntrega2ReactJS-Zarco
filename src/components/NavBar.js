import React from'react';
import CartWidget from './CartWidget'
import { NavLink, Link } from 'react-router-dom'



const NavBar = () => {
return (
<header className="header">

      {/* links de navegación */}
      <nav>
        <ul className="navbar">
          <li>
          <NavLink to={`/category/pantalones-largos`} className={({ isActive }) => isActive ? 'ActiveOption' : Option}>Pantalones Largos</NavLink>
          </li>
          <li>
          <NavLink to={`/category/pantalones-cortos`} className={({ isActive }) => isActive ? 'ActiveOption' : Option}>Pantalones Cortos</NavLink>
          </li>
          <li>
          <NavLink to={`/category/conjuntos-deportivos`} className={({ isActive }) => isActive ? 'ActiveOption' : Option}>Conjuntos Deportivos</NavLink>
          </li>
        <CartWidget />
        </ul>
      </nav>
    </header>
);
};



export default NavBar;