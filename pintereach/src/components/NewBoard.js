import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postBoard } from '../actions';

import styled from 'styled-components';
import Button from '../styled/Button';

const StyledBoardForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin: 0 auto;
  margin-top: 2%;
  padding: 1%;
  background-color: lavenderblush;
  -webkit-box-shadow: 18px 10px 29px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 18px 10px 29px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 18px 10px 29px 1px rgba(0, 0, 0, 0.75);

  h4 {
    font-size: 1.5rem;
    font-family: 'Roboto Slab', serif;
  }

  input {
    width: 80%;
    margin: 0 auto;
  }

  .lrgInput {
    height: 15vh;
    margin-bottom: 2%;
  }
`;

const initialState = {
  name: '',
  description: '',
};

const NewBoard = (props) => {
  const [inputValue, setInputValue] = useState(initialState);

  const onChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    props.postBoard(inputValue);
    props.history.push('/dashboard');
  };

  return (
    <div>
      <StyledBoardForm onSubmit={onSubmit}>
        <h4>Board Name</h4>
        <input
          type='text'
          placeholder='name'
          name='name'
          value={inputValue.name}
          onChange={onChange}
        />
        <h4>Description</h4>
        <input
          type='text'
          placeholder='description'
          name='description'
          className='lrgInput'
          value={inputValue.description}
          onChange={onChange}
        />

        <Button>Submit</Button>
      </StyledBoardForm>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    description: state.description,
  };
};

export default connect(mapStateToProps, { postBoard })(NewBoard);
