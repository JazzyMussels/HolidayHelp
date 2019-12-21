import React from 'react';
import '../css/Healthcare.css';
import {NavLink} from 'react-router-dom';


function HealthCare() {
    return(
        <div id='campaign-bg'>
            <h1>Healthcare</h1>
            <ul>
                <li>30 million people went without health insurance last year, 1 mill more than 2017</li>
                <li>Americans borrowed 88 million for health care 2018</li>
                <li>Why can we spend trillion dollars on war but not healthcare</li>
                <li>40% can’t afford deductibles on insurance</li>
            </ul>
            
            <NavLink to='/main'>Return</NavLink>
        </div>
    )
}

export default HealthCare;