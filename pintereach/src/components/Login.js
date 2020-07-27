import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import styled from 'styled-components'; 


const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid red;
  width: 80vw;
  height: 80vh;
  background-color: lavenderblush;
  opacity: 95%;

  h2 {
   width: 40%; 
   align-self: center;
   font-size: 4.0rem;
   font-family: 'Roboto Slab', serif;
   font-weight: bold;
   color: indianred;
   text-shadow: 2px 2px white;
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
    font-family: 'Roboto Slab', serif;
    font-weight: bold;
  }

  input {
    height: 3vh;
    background-color: coral;
    opacity: 70%;
    font-weight: bold;
    font-size: 1.4rem;
  }
`;

const StyledButton = styled.button`
  width: 20%;
  margin: 0 auto;
  margin-top: 2%;
  box-shadow: inset 0px 1px 0px 0px #cf866c;
	background: linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);
	background-color: #d0451b;
	border-radius: 3px;
	border: 1px solid #942911;
	cursor: pointer;
	color: #ffffff;
	font-family: Arial;
	font-size: 1.3rem;
	padding: 6px 24px;
	text-decoration: none;
	text-shadow: 0px 1px 0px #854629;
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
    
    <StyledDiv>
      {localStorage.getItem('token') && props.history.push('/dashboard')}
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
