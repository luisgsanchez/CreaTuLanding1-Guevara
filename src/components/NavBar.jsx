import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Mi Tienda</h2>

      <ul className="navbar-links">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Ofertas</li>
        <li>Contacto</li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
