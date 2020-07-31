import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainContainer from './components/pages/MainContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainContainer} />
      </Switch>
    </Router>
  );
}

export default App;