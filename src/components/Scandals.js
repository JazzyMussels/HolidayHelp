import React from 'react';
import '../css/Scandals.css';
import {NavLink} from 'react-router-dom';


function Scandals() {
    return(
        <div id='campaign-bg'>
            <p>Scandals</p>
            <ul>
                <li>-trump university scammed people out of money for real estate classes then settled for 25 million dollars</li>
                <li>“I’ve used the laws of this country to pare debt” inn eference to bankruptcies</li>
                <li>-owes multiple cities money for security fees</li>
                <li>-admitted to using his charity for his own campaign, pay off debt, paid 2 mill per a court order-used charity as a slush fund</li>
                <li>-turnover rate within party, he can’t even keep his own allies in line</li>
                <li>-he has hosted numerous foreign dignitaries at his properties and doesn’t release expense report details</li>
                <li>-several emoluments clause lawsuits-says it’s phony</li>
                <li>-trump boasts about groping women-multiple lawsuits against him</li>
                <li>-list of scandals: https://www.theatlantic.com/politics/archive/2017/01/donald-trump-scandals/474726/</li>
                <li></li>

            </ul>
            <NavLink to='/main'>Return</NavLink>
        </div>
    )
}

export default Scandals;