// src/components/VideoCard.js
import React from 'react';

const VideoCard = ({ video, onEdit, onDelete }) => {
  return (
    <div style={cardStyle}>
      <img src={video.image} alt={video.title} style={imageStyle} />
      <div style={cardBodyStyle}>
        <h3>{video.title}</h3>
        <button style={buttonStyle} onClick={() => onEdit(video)}>Editar</button>
        <button style={buttonStyle} onClick={() => onDelete(video.id)}>Borrar</button>
      </div>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '5px',
  overflow: 'hidden',
  width: '200px',
  margin: '10px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
};

const cardBodyStyle = {
  padding: '10px',
};

const buttonStyle = {
  margin: '5px',
  padding: '5px 10px',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
};

export default VideoCard;
