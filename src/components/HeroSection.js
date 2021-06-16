import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video.mp4' autoPlay loop muted />
      <h1>BUILD YOUR FUTURE HERE</h1>
      <p>See the future today</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          KNOW MORE
        {/* </Button> */}
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          {/* WATCH TRAILER <i className='far fa-play-circle' /> */}
        </Button> 
      </div>
    </div>
  );
}

export default HeroSection;
