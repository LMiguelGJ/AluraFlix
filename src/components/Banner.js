// src/components/Banner.js
import React from 'react';
import styles from '../styles/Banner.module.css';


const Banner = ({ image, title, parrafo }) => {
  return (
    <div className={styles.bannerStyle}>
      <div className={styles.player} >
      </div>
        <img src={image} alt={title} className={styles.imageStyle} />
      <div className={styles.card} >
        <h1 className={styles.titleStyle}>{title}</h1>
        <p className={styles.parrafoStyle}>{parrafo}</p>
      </div>
    </div>
  );
};

export default Banner;
