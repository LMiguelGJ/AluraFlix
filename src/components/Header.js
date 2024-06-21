// src/components/Header.js
import React from 'react';
import logo from '../assets/logo.png'; 
import styles from '../styles/Header.module.css';


const Header = () => {
  return (
    <header className={styles.headerStyle}>
      <img src={logo} alt="Logo" className={styles.logoStyle} />
      <nav>
        <ul className={styles.navListStyle}>
          <li className={styles.btHome}>Home</li>
          <li className={styles.btNewvideo}>Nuevo Video</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

