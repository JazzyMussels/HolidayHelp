import React from 'react';
import '../css/Economy.css';
import {NavLink} from 'react-router-dom';


function Economy() {
    return(
        <div id='campaign-bg'>
            <p>Economic Policy</p>
            <ul>
                <li>-job growth has been steady since 2010, and many states have enacted min wage hikes, oil rose so more investment came to us from that, most of growth around 2018 was not to do with trumps tax cuts</li>
                <li> The party has paired higher spending with a massive corporate tax cut, which sweetened a long-term marginal-rate cut on corporate income with a short-term tax benefit for households.
                    Obama tried to pass the same thing but republicans refused…arguing that higher deficits were philosophically unacceptable and financially ruinous.</li>
                <li>-collapsing farm prices soy beans dropped 78% last year</li>
                <li>Farm bankruptcies are at near record levels.</li>
                <li>-farm aid negligent…16 bill for millions of farmers won’t help anyone out of bankruptcy</li>
                <li>-manufacturing exports at a 10 year low</li>
                <li></li>
            </ul>
            <NavLink to='/main'>Return</NavLink>
        </div>
    )
}

export default Economy;