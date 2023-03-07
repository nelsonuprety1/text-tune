import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="main-nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/convert">Text Converter</NavLink>
      <NavLink to="/similar">Synonyms & Antonyms</NavLink>
    </nav>
  );
};

export default Navbar;
