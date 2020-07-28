import React from 'react';
import { Switch, Route, Link, useHistory } from 'react-router-dom';

import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import NewBoard from './components/NewBoard.js';
import NewArticle from './components/NewArticle.js';
import styled from 'styled-components';

const StyledHeader = styled.div`
  font-size: 2rem;
  display: flex;
  width: 40%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: indianred;
  text-shadow: 2px 2px white;
  font-weight: bold;
  padding: 2%;

  justify-content: space-between;

  &:hover {
    text-decoration: underline;
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
      <StyledHeader className='nav'>
        {localStorage.getItem('token') ? (
          <>
            <Link to='/dashboard'>Dashboard</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
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
        <Route exact path='/new-article' component={NewArticle} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
};

export default App;
