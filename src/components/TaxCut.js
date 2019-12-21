import React from 'react';
import '../css/TaxCut.css';
import {NavLink} from 'react-router-dom';


function TaxCut() {
    return(
        <div id='campaign-bg'>
            <p>TaxCut</p>
            <ul>
                <li>-Trump tax cuts, which between 2016 and 2018 roughly halved the effective tax rate for companies on the S&P 500 have not led to massive business investment, has led to concentration of wealth, buyback of stocks rather than spending…companies are very large and risk adverse, minimal competition</li>
                <li>-only 6% of tax cuts were spent on workers, around a 233 dollar per year increase</li>
                <li>top 20 % of earners(150K or more) get 72 % of tax cut benefits</li>
                <li>The result is that in 2020, TCJA’s corporate tax changes will provide $77 billion in tax cuts to U.S. taxpayers and $38 billion to foreign investors. Of the portion going to U.S. taxpayers, $34 billion will flow to the richest 1 percent.</li>
                <li>As a result of both the business and personal income tax cuts, households making between $500,000 and $1 million will see their after-tax income rise by an average of 5.2%. Households making less than $50,000 (the median income is $61,372 in the US) see only a 0.6% increase. Less than two for people between 50-100k</li>
            </ul>
            <NavLink to='/main'>Return</NavLink>
        </div>
    )
}

export default TaxCut;