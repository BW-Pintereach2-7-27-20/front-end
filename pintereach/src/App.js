import React from 'react';
import { Switch, Route, useHistory, NavLink } from 'react-router-dom';

import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import NewBoard from './components/NewBoard.js';
import NewArticle from './components/NewArticle.js';
import Articles from './components/Articles.js';
import EditArticle from './components/EditArticle.js';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  background-color: indianred;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: 'Roboto Slab', serif;
  font-weight: bold;
  font-size: 1.8rem;
  align-self: center;
  padding: 0.5%;

  &:active {
    color: white;
  }
`;

const App = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <div className='App'>
      <StyledHeader>
        {localStorage.getItem('token') ? (
          <>
            <StyledNavLink to='/dashboard' activeClassName='active-link'>
              Dashboard
            </StyledNavLink>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <StyledNavLink to='/login' activeClassName='active-link'>
              Login
            </StyledNavLink>
            <StyledNavLink to='/register' activeClassName='active-link'>
              Register
            </StyledNavLink>
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
        <Route exact path='/board/:id/new-article' component={NewArticle} />
        <Route exact path='/board/:id' component={Articles} />
        <Route exact path='/article/:id/edit' component={EditArticle} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
};

export default App;
