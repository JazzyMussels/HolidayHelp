import React from 'react';
import '../css/CampaignPromise.css';
import {NavLink} from 'react-router-dom';


function CampaignPromise() {
    return(
        <div id='campaign-bg'>
            <p>Broken Campaign Promises</p>
            <ul>
                <li>-he promised 4-6% growth, it’s only been 2.5</li>
                <li>He hasn’t fix the savings deficit, the current account deficit or the budget deficit.</li>
                <li>He hasn’t fixed immigration.</li>
                <li>He hasn’t fixed infrastructure.</li>
                <li>The GOP has presided over the largest two-year deficit increase in American history, outside of a recession.</li>
                <li>tax cuts havent helped working class</li>
            </ul>
            <NavLink to='/main'>Return</NavLink>
        </div>
    )
}

export default CampaignPromise;