import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home';
import SignIn from './pages/signin';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
