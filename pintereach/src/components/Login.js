import React, { useState } from 'react';

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
