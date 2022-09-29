import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {ButtonVolunteer} from './ButtonVolunteer';
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>EVERYONE DESERVE THE CARE</h1>
      <p>Join us now! Become a hero</p>
      <div className='hero-btns'>
        <ButtonVolunteer
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Register a Volunteer
        </ButtonVolunteer>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
