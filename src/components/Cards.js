import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
// import CardContent from '@material-ui/core/CardContent'

function Cards() {
  return (
    <div className='cards'>
      <h1>WELCOME TO AARNA ANALYTICS!</h1>
    <div className='cardsbody'>
      <p>Talented group of individuals with great experience and deep knowledge in AI.</p>
      <p>Work published all across the globe.</p>
      <p>Make your future sound is our passion.</p>
      <p>At Aarna Analytics, we believe that our technological edge and enterprise can lighten up your life to a different level.</p>
      <p>We are a continuoulsy developing company and evolving for your betterment every minute.</p>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-f.jpg'
              text='THE STOCK MARKET IN YOUR HANDS'
              
              
              // path='/'
            />
            {/* <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            /> */}
            {/* <CardItem
              src='images/img-a.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              // label='Adrenaline'
              // path='/ourtech'
            />
            <CardItem
              src='images/img-a.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              // label='Adrenaline'
              path='/vision'
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
