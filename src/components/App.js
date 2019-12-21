import React from 'react';
import Intro from './Intro'
import Main from './Main'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CampaignPromise from './CampaignPromise'
import Democracy from './Democracy'
import Economy from './Economy'
import Healthcare from './Healthcare'
import Impeachment from './Impeachment'
import IncomeInequality from './IncomeInequality'
import Scandals from './Scandals'
import SexualMisconduct from './SexualMisconduct'
import Swamp from './Swamp'
import TaxCut from './TaxCut'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/main'><Main/></Route>
        <Route path='/broken-promises'><CampaignPromise/></Route>
        <Route path='/anti-democracy'><Democracy/></Route>
        <Route path='/economy'><Economy/></Route>
        <Route path='/healthcare'><Healthcare/></Route>
        <Route path='/impeach'><Impeachment/></Route>
        <Route path='/income-inequality'><IncomeInequality/></Route>
        <Route path='/scandals'><Scandals/></Route>
        <Route path='/sexual-misconduct'><SexualMisconduct/></Route>
        <Route path='/drain-the-swamp'><Swamp/></Route>
        <Route path='/tax-cuts'><TaxCut/></Route>
        <Route path='/'><Intro/></Route>
      </Switch>
     </BrowserRouter>
  );
}

export default App;
