import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage/homepage';
import Kudospage from './pages/Kudospage/kudospage';

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/kudos' component={Kudospage} />
       
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;

