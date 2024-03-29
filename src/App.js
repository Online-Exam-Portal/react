import React from 'react';
import Navbar from './components/Utilities/Navbar';
import './App.css';
import Home from './components/pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TakeTest from './components/pages/TakeTest';
import CreateTest from './components/pages/CreateTest';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import WhichTest from './components/pages/WhichTest';
import Topic from './components/pages/AddTopic';
import Report from './components/pages/Report';
import Status from './components/pages/status';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/WhichTest' component={WhichTest} />
          <Route path='/TakeTest' component={TakeTest} />
          <Route path='/CreateTest' component={CreateTest} />
          <Route path='/SignUp' component={SignUp} />
          <Route path='/Login'component={Login} />
          <Route path='/AddTopic'component={Topic} />
          <Route path='/Report'component={Report} />
          <Route path='/Status'component={Status} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;