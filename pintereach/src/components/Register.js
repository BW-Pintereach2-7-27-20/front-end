import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
// styled components imports - each in their own folder in Styled 
import Container from '../Styled/Container'; 
import Form from '../Styled/Form';
import Button from '../Styled/Button'; 
import Icon from '../Styled/Icon';
// img imports
import userIcon from '../images/user-icon.png'; 
import passIcon from '../images/password-icon.png'; 

const initialValue = {
  username: '',
  password: '',
};

const Register = (props) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const onChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post('/register', inputValue)
      .then((res) => {
        props.history.push('/login');
      });
  };

  return (
    <Container>
      {localStorage.getItem('token') && props.history.push('/dashboard')}

      <h2>Register here</h2>
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

        <Button>Register</Button>
      </Form>
    </Container>
  );
};

export default Register;
