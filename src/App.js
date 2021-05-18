import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './views/Home'
import Playground from './views/Playground'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/play" component={Playground} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;