import React from 'react';
import '../css/SexualMisconduct.css';
import {NavLink} from 'react-router-dom';


function SexualMisconduct() {
    return(
        <div id='campaign-bg'>
            <p>Sexual Misconduct</p>
            <NavLink to='/main'>Return</NavLink>
        </div>
    )
}

export default SexualMisconduct;