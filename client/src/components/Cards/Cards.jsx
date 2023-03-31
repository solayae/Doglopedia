import React from 'react';
import './Cards.css';

import { Card } from '../Card/Card.jsx';

export function Cards({ allDogs }) {
  const dogsList = allDogs;

  return (
    <div className='cards-container'>
      {dogsList?.map((dog) => (
        <Card key={dog.id} dog={dog} />
      ))}
    </div>
  );
}
