import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './components/pages/AboutUs';
import Vision from './components/pages/Vision';
import SignUp from './components/pages/SignUp';
import UserSignUp from './components/UserSignUp';
import OurImpact from './components/pages/OurImpact';
import VolunteerRegister from './components/VolunteerRegister';
import Testimonials from './components/Testimonials';
import KommunicateChat from './components/Chat';
import { DonateNowButton } from './components/DonateNowButton';
import DonateNowComponent from './components/DonateNowComponent';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>\
          <Route path='/' exact component={Home} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/vision' component={Vision} />
          <Route path='/sign-up' component={UserSignUp} />
          <Route path='/our-impact' component={OurImpact} />
          <Route path='/volunteer' component={VolunteerRegister} />
          <Route path='/donate' component={DonateNowComponent} />
          
        </Switch>
      </Router>
  
    </>
  );
}

export default App;
