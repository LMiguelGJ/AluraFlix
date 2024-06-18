// src/components/CategorySection.js
import React from 'react';
import VideoCard from './VideoCard';

const CategorySection = ({ title, videos, onEdit, onDelete }) => {
  return (
    <section style={sectionStyle}>
      <h2>{title}</h2>
      <div style={videosContainerStyle}>
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} onEdit={onEdit} onDelete={onDelete} />
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
  flexWrap: 'wrap',
  gap: '10px',
};

export default CategorySection;
