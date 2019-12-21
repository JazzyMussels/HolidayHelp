import React from 'react';
import '../css/IncomeInequality.css';
import {NavLink} from 'react-router-dom';


function IncomeInequality() {
    return(
        <div id='campaign-bg'>
            <p>Income Inequality</p>
            <ul>
                <li>80% of American workers are living paycheck to paycheck</li>
                <li>hasn’t done anything to address inequality of opportunity, wealth or income. Wages are shit and havent risen relative to prices</li>
                <li>Student loan debt is insane and trump ed dept rejected 98% of forgiveness applications</li>
                <li>-proposed to cut 10 billion from hud for affordable housing</li>
                <li>Defense dept b budget is 130 million bigger than when trump took office, but cut meals on wheels</li>
                <li></li>
            </ul>
            <NavLink to='/main'>Return</NavLink>
        </div>
    )
}

export default IncomeInequality;