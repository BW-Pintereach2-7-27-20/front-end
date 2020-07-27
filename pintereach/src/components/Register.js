import React from 'react';

const Register = () => {
  return (
    <>
      <h2>Register here</h2>
      <form>
        <label htmlFor='username'>Username</label>
        <input type='text' name='username' placeholder='john@doe.com' />
        <label htmlFor='password'>Password</label>
        <input type='text' name='password' placeholder='********' />

        <button>Register</button>
      </form>
    </>
  );
};

export default Register;
