import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './views/Home'
import Playground from './views/Playground'
import Landing from './views/Landing'
import Oops from './views/Oops'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/play" component={Playground} />
          <Route path="/home" component={Home} />
          <Route path="*" component={Oops} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;