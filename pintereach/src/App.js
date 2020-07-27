import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import NewBoard from './components/NewBoard.js';
import styled from 'styled-components';

const StyledHeader = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: space-between;

  Link {
    border: 1px solid red;
  }
`;

const App = () => {
  return (
    <Router>
      <div className='App'>
        <StyledHeader className='nav'>
          {localStorage.getItem('token') ? (
            <Link to='/dashboard'>Dashboard</Link>
          ) : (
            <>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </>
          )}
        </StyledHeader>

        <Switch>
          <PrivateRoute
            exact
            path='/dashboard'
            component={Dashboard}
          ></PrivateRoute>
          <Route exact path='/new-board' component={NewBoard} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
