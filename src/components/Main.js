import React from 'react';
import '../css/Main.css';
import {NavLink} from 'react-router-dom';


function Main() {
    return(
        <div id='main-bg'>
            <div id='main-left-text'>This is your President. <br></br>He is a salesman.</div>
            <div id='trump-photo'></div>
            <div id='main-right-text'>He sells lies <br></br>to people like you and I.</div>
            <div id='main-bottom-text'>Click the links and learn why.</div>
            <div className='category-links'>
                <NavLink to='/broken-promises' style={{color: 'whitesmoke', padding: '4px'}}>Campaign Lies</NavLink>
                <NavLink to='/anti-democracy' style={{color: 'whitesmoke', padding: '4px'}}>Anti-Democracy</NavLink>
                <NavLink to='/economy' style={{color: 'whitesmoke', padding: '4px'}}>Economic Policy</NavLink>
                <NavLink to='/healthcare' style={{color: 'whitesmoke', padding: '4px'}}>Healthcare Reform</NavLink>
                <NavLink to='/impeach' style={{color: 'whitesmoke', padding: '4px'}}>Impeachment Lies</NavLink>
                <NavLink to='/income-inequality' style={{color: 'whitesmoke', padding: '4px'}}>Income Inequality</NavLink>
                <NavLink to='/scandals' style={{color: 'whitesmoke', padding: '4px'}}>Scandals</NavLink>
                <NavLink to='/sexual-misconduct' style={{color: 'whitesmoke', padding: '4px'}}>Sexual Misconduct</NavLink>
                <NavLink to='/drain-the-swamp' style={{color: 'whitesmoke', padding: '4px'}}>Drain the Swamp</NavLink>
                <NavLink to='/tax-cuts' style={{color: 'whitesmoke', padding: '4px'}}>Tax Cuts</NavLink>
            </div>
        </div>
    )
}



export default Main;