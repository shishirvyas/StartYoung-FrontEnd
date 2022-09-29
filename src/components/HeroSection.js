import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {ButtonVolunteer} from './ButtonVolunteer';
import { DonateNowButton } from './DonateNowButton';
function HeroSection() {

  const handleClick=(e)=>{
    e.preventDefault()
    const student={}
    console.log(student)
    fetch("https://codebrigade2022.azurewebsites.net/api/signup",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)

  }).then(()=>{
   
    console.log("New User added")
  })
}
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>EVERYONE DESERVE THE CARE</h1>
      <p>Join us now! Become a hero</p>
      <div className='hero-btns'>
      <DonateNowButton
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={{handleClick}}
        >
        Donate Now
        </DonateNowButton>
        <ButtonVolunteer
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Register a Volunteer
        </ButtonVolunteer>
       
      </div>
    </div>
  );
}

export default HeroSection;
