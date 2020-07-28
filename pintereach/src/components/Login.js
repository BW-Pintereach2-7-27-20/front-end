import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


// styled components imports - each in their own folder in Styled 
import Container from '../Styled/Container'; 
import Form from '../Styled/Form';
import Button from '../Styled/Button'; 
import Icon from '../Styled/Icon'; 
// icon imports 
import userIcon from '../images/user-icon.png'; 
import passIcon from '../images/password-icon.png'; 
import loginIcon from '../images/login-icon.png'; 


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
    font-size: 3rem;
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

    <StyledDiv>

      {localStorage.getItem('token') && props.history.push('/dashboard')}
      <h2>Login here</h2>
      <Form onSubmit={onSubmit}>
        <label htmlFor='username'><Icon src={userIcon} alt='login icon' />Username</label>
        <input
          type='text'
          name='username'
          placeholder='john@doe.com'
          value={inputValue.username}
          onChange={onChange}
        />
        <label htmlFor='password'><Icon src={passIcon} alt='login icon' />Password</label>
        <input
          type='text'
          name='password'
          placeholder='********'
          value={inputValue.password}
          onChange={onChange}
        />

        <Button><Icon src={loginIcon} alt='login icon' /></Button>
      </Form>
    </Container>
  );
};

export default Login;
