import React from 'react';
import '../css/Democracy.css';
import {NavLink} from 'react-router-dom';


function Democracy() {
    return(
        <div id='campaign-bg'>
            <p>Anti-Democratic</p>
            <ul>
                <li>Alienates our allies, looks down an democratic leaders but admires strongman dictators</li>
                <li>Uses subtle language to espouse fascist viewpoints and passes it off like he’s joking</li>
                <li>directly said it was okay to take info about political opponents from foreign goats</li>
                <li>jokes about not leaving office</li>
                <li>chided law enforcement for not beating up a protestor</li>
                <li>called FBI scum</li>
                <li>calls media that disagrees with him the enemy of the people</li>
                <li>claims impeachment is illegal</li>
                <li>people not clapping for his state of the union are treasonous, un American</li>
            </ul>
            <NavLink to='/main'>Return</NavLink>
        </div>
    )
}

export default Democracy;