import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ProductCatalog from './MainPage.js';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={ProductCatalog} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
