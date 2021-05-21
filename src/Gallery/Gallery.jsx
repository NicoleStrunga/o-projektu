import React from 'react';
import { photos } from './index.js';
import './style.css';

export const Gallery = () => {
  return (
    <div>
      {/* <h2>Galerie</h2> */}
      <div className="container--gallery">
        {photos.map((photo) => (
          <img src={photo.image} alt={photo.title} key={photo.id} />
        ))}
      </div>
    </div>
  );
};
