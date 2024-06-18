// src/components/CategorySection.js
import React from 'react';

const CategorySection = ({ title, videos }) => {
  return (
    <section style={sectionStyle}>
      <h2>{title}</h2>
      <div style={videosContainerStyle}>
        {videos.map((video, index) => (
          <div key={index} style={videoStyle}>
            <img src={video.image} alt={video.title} style={videoImageStyle} />
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const sectionStyle = {
  margin: '20px 0',
};

const videosContainerStyle = {
  display: 'flex',
  gap: '10px',
  overflowX: 'scroll',
};

const videoStyle = {
  flex: '0 0 auto',
  width: '200px',
};

const videoImageStyle = {
  width: '100%',
  height: 'auto',
};

export default CategorySection;
