import React from 'react';

const photos = [
  {
    id: 1,
    title: 'Invalidovna',
    image: 'http://placekitten.com/200/300',
  },
];

export const Gallery = () => {
  return (
    <div>
      <h2>Galerie</h2>
      <div>
        {photos.map((photo) => (
          <>
            <p key={photo.id}>{photo.title}</p>
            <img src={photo.image} alt={photo.title} />
          </>
        ))}
      </div>
    </div>
  );
};
