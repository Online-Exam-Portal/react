import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TakeTest from './components/pages/TakeTest';
import CreateTest from './components/pages/CreateTest';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/TakeTest' component={TakeTest} />
          <Route path='/CreateTest' component={CreateTest} />
          <Route path='/SignUp' component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;