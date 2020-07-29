import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postBoard } from '../actions';

import styled from 'styled-components'; 

const StyledBoardForm = styled.form`
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    width: 50%;
    margin: 0 auto;

    input {
      width: 80%;
      margin: 0 auto;
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
          smallInput
          type='text'
          placeholder='name'
          name='name'
          value={inputValue.name}
          onChange={onChange}
        />
        <h4>Description</h4>
        <input
          lrgInput
          type='text'
          placeholder='description'
          name='description'
          value={inputValue.description}
          onChange={onChange}
        />

        <button>Submit</button>
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
