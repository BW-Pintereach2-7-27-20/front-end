import React, { useState } from 'react';
import styled from 'styled-components'; 
import UsernameIcon from '../images/username-icon.png'; 
import PassIcon from '../images/password-icon.png'; 
import LoginIcon from '../images/login-icon.png';

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

  const StyledDiv = styled.div`
  display: flex;
  margin-top: 5%;
  border: 1px solid red;
  width: 80vw;
  `;

  const StyledHeader = styled.h2`
    color: indianred;
    font-weight: bold;
    font-size: 3.5rem;
    text-shadow: 2px 2px gray;
    padding: 2%;
    width: 20%;
    align-self: center;
    margin: 0 auto;
  `;

  const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 5%;
    width: 50%;
    border: 1px solid gray;

    label {
      font-size: 2.0rem;
    }

    input {
      height: 5vh;
      font-family: serif;
    }

    img {
      height: 5vh;
    }
  `;

  const StyledButton = styled.button`
    box-shadow: inset 0px 1px 0px 0px #cf866c;
	  background: linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);
	  background-color: #d0451b;
    border-radius: 3px;
    width: 15%;
    margin: 0 auto;
    margin-top: 2%;
	  border: 1px solid #942911;
	  cursor: pointer;
	  color: #ffffff;
	  font-family:Arial;
	  font-size: 1.3rem;
	  padding: 6px 24px;
	  text-decoration: none;
    text-shadow: 0px 1px 0px #854629;
    
    img {
      height: 3vh;
    }
  `;


  return (
    <StyledDiv>
      <StyledHeader>Login here</StyledHeader>
      <StyledForm onSubmit={onSubmit}>
        <label htmlFor='username'><img src={UsernameIcon} alt='username icon'/> Username</label>
        <input
          type='text'
          name='username'
          placeholder='john@doe.com'
          value={inputValue.username}
          onChange={onChange}
        />
        <label htmlFor='password'><img src={PassIcon} alt='password icon' /> Password</label>
        <input
          type='text'
          name='password'
          placeholder='********'
          value={inputValue.password}
          onChange={onChange}
        />

        <StyledButton><img src={LoginIcon} className='login' alt='login icon' /></StyledButton>
      </StyledForm>
    </StyledDiv>
  );
};

export default Login;
