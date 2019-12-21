import React from 'react';
import '../css/Impeachment.css';
import {NavLink} from 'react-router-dom';


function Impeachment() {
    return(
        <div id='campaign-bg'>
            <p>Impeachment</p>
            <ul>
                <li>-Trumps lawyers were invited to participate in proceedings but declined</li>
                <li>-At no point were any rules violated</li>
                <li>-Over a dozen witnesses have testified that Trump used his public office for private gain and that he tried to leverage US foreign policy in exchange for his political benefit. </li>
                <li>The White House also blocked every single executive-branch employee and agency from complying with lawful congressional subpoenas for documents and witness testimony.</li>
                <li>Trump: would’ve been wonderful if Pelosi impeached bush </li>
                <li>Rep John Ratcliffe says its okay for goats to intervene in us politics-treason per 2002 law</li>
                <li></li>
        </ul>
            <NavLink to='/main'>Return</NavLink>
        </div>
    )
}

export default Impeachment;