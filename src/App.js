import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Views from './views'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Views.Landing} />
          <Route path="/play" component={Views.Playground} />
          <Route path="/home" component={Views.Home} />
          <Route path="/cookie" component={Views.Cookie} />
          <Route path="*" component={Views.Oops} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;