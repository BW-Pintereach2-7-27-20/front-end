import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import styled from 'styled-components';
import UsernameIcon from '../images/username-icon.png';
import PassIcon from '../images/password-icon.png';
import LoginIcon from '../images/login-icon.png';
import Background from '../images/dummy-background.jpg';

const initialValue = {
  username: '',
  password: '',
};

const Login = () => {
  const [inputValue, setInputValue] = useState(initialValue);

  const onChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post('/login')
      .then((res) => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/dashboard');
      });
  };

  return (
    <>
      <h2>Login here</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          placeholder='john@doe.com'
          value={inputValue.username}
          onChange={onChange}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='text'
          name='password'
          placeholder='********'
          value={inputValue.password}
          onChange={onChange}
        />

        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
