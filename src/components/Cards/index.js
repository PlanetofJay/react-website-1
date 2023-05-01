import React from 'react';
import Card from './Card';

export default function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Card />
          </ul>
        </div>
      </div>
    </div>
  );
}
