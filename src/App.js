import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginScreen from './component/login'
import DasboardScreen from './component/dashboard'

const App = () => (
  <Router>
    <Route exact path="/" component={LoginScreen} />
    <Route path="/dashboard" component={DasboardScreen} />
  </Router>
);
export default App;

