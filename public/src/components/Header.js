// src/components/Header.js
import React from 'react';
import logo from '../assets/logo.png'; // Asegúrate de tener una imagen de logo en esta ruta


const Header = () => {
  return (
    <header style={headerStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
      <nav>
        <ul style={navListStyle}>
          <li style={navItemStyle}>Home</li>
          <li style={navItemStyle}>Nuevo Video</li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: 'white',
  };
  
  const logoStyle = {
    height: '40px',
  };
  
  const navListStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  };
  
  const navItemStyle = {
    textDecoration: 'none',
    color: 'white',
  };


export default Header;

