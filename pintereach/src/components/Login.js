import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialValue = {
  username: '',
  password: '',
};

const Login = (props) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const onChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post('/login', inputValue)
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
