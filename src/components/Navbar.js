// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Productos</Link>
      <Link to="/carrito">Carrito</Link>
    </nav>
  );
};

export default Navbar;
