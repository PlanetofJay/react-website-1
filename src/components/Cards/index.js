import React from 'react';
import Card from './Card';
import './styles.css';

export default function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Card
              src='./../../../public/images/img-9.png'
              text='Take a hot air balloon ride, stay in a unique cave hotel and try an authentic Turkish bath'
              label='Adventure'
              path='/services'
            />
            <Card
              src='./../../../public/images/img-8.jpeg'
              text='The shoreline of Positano is home to some of the most iconic beaches in Italy'
              label='Vacation'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <Card
              src='./../../../public/images/img-7.jpeg'
              text="Kyoto is easy to see its centuries-old shrines, beautiful ryokans, and rich geisha culture as the heart of Japan"
              label='Tradition'
              path='/services'
            />
            <Card
              src='./../../../public/images/img-6.jpg'
              text='Blue lagoon, nothern lights, ice cave, Reykjavik and discover the south coast in Iceland'
              label='Adventure'
              path='/services'
            />
            <Card
              src='./../../../public/images/img-5.jpg'
              text='What happens in Vegas, stays in Vegas, there is just no quiet in Vegas'
              label='Vacation'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
