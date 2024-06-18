// src/components/Footer.js
import React from 'react';
import logo from '../assets/logo.png'; // Asegúrate de tener una imagen de logo en esta ruta

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
      <p>&copy; 2023 My React App</p>
    </footer>
  );
};

const footerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#282c34',
  color: 'white',
};

const logoStyle = {
  height: '40px',
};

export default Footer;
