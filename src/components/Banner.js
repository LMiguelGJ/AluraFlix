// src/components/Banner.js
import React from 'react';

const Banner = ({ image, title }) => {
  return (
    <div style={bannerStyle}>
      <img src={image} alt={title} style={imageStyle} />
      <h1 style={titleStyle}>{title}</h1>
    </div>
  );
};

const bannerStyle = {
  position: 'relative',
  textAlign: 'center',
  color: 'white',
};

const imageStyle = {
  width: '20%',
  height: 'auto',
};

const titleStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '3rem',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: '10px',
};

export default Banner;
