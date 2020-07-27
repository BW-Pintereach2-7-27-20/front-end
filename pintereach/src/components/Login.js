import React from 'react';

const Login = () => {
  return (
    <>
      <h2>Login here</h2>
      <form>
        <label htmlFor='username'>Username</label>
        <input type='text' name='username' placeholder='john@doe.com' />
        <label htmlFor='password'>Password</label>
        <input type='text' name='password' placeholder='********' />

        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
