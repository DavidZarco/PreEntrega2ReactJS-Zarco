import React from'react';
import CartWidget from './CartWidget'
import ItemListContainer from './ItemListContainer';



const NavBar = () => {
return (
<header className="header">

      {/* links de navegación */}
      <nav>
        <ul className="navbar">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Productos</a>
          </li>
          <li>
            <a href="/">Ofertas</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
        <CartWidget />
        </ul>
      </nav>
    </header>
);
};



export default NavBar;