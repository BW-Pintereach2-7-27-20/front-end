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

`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: indianred;
  text-shadow: 2px 2px white;
  font-weight: bold;
  padding: 2%;

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
              <StyledLink to='/login'>Login</StyledLink>
              <StyledLink to='/register'>Register</StyledLink>
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
