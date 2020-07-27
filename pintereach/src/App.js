import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <div className='nav'>
          <Link to='/'>Dashboard</Link>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </div>

        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
