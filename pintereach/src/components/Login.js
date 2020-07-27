import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import styled from 'styled-components'; 

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid red;
  width: 80vw;
  height: 80vh;

  h2 {
   width: 40%; 
   align-self: center;
   font-size: 3.0rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 40%;
  padding: 5%;

  label {
    font-size: 1.8rem;
    margin: 1%;
  }

  input {
    height: 2.5vh;
  }
`;

const StyledButton = styled.button`
  width: 20%;
  margin: 0 auto;
  margin-top: 2%;
`;

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
        console.log(res);
        localStorage.setItem('token', res.data.token);
        props.history.push('/dashboard');
      });
  };

  return (
<<<<<<< HEAD
    <>
      {localStorage.getItem('token') && props.history.push('/dashboard')}
=======
    <StyledDiv>
>>>>>>> 0649c8bd02c02059572fcdbafca118b2e6ba9373
      <h2>Login here</h2>
      <StyledForm onSubmit={onSubmit}>
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

        <StyledButton>Login</StyledButton>
      </StyledForm>
    </StyledDiv>
  );
};

export default Login;
