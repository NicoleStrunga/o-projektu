import React from 'react';
import image1 from './img/1_Invalidovna.jpg';
import image2 from './img/2_Invalidovna.jpg';
import image3 from './img/3_Invalidovna.jpg';
import image4 from './img/4_Palmovka.jpg';
import image5 from './img/5_Palmovka.jpg';
import image6 from './img/6_Palmovka.jpg';
import image7 from './img/7_Palmovka.jpg';
import image8 from './img/8_Florenc.jpg';
import image9 from './img/9_Florenc.jpg';
import { photos } from './index.js';
import './style.css';

export const Gallery = () => {
  return (
    <div>
      <h2>Galerie</h2>
      <div className="container--gallery">
        <img src={image1} alt="Invalidovna" />
        <img src={image2} alt="Invalidovna" />
        <img src={image3} alt="Invalidovna" />
        <img src={image4} alt="Palmovka" />
        <img src={image5} alt="Palmovka" />
        <img src={image6} alt="Palmovka" />
        <img src={image7} alt="Palmovka" />
        <img src={image8} alt="Florenc" />
        <img src={image9} alt="Florenc" />
        {/* {photos.map((photo) => (
          <img src={photo.image} alt={photo.title} key={photo.id} />
        ))} */}
      </div>
    </div>
  );
};
