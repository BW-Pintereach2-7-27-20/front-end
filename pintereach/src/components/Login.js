import React, { useState } from 'react';
import styled from 'styled-components'; 
import UsernameIcon from '../images/username-icon.png'; 
import PassIcon from '../images/password-icon.png'; 

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
    font-size: 3.0rem;
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

        <button>Login</button>
      </StyledForm>
    </StyledDiv>
  );
};

export default Login;
