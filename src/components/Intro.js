import React from 'react';
import '../css/Intro.css';
import {NavLink} from 'react-router-dom';

function Intro() {
  return (
    <div className="Intro">
     <p id='intro-text'>Ready to argue with your family about Trump?</p>
     <NavLink id='help-button' to='/main'></NavLink>
    </div>
  );
}

export default Intro;