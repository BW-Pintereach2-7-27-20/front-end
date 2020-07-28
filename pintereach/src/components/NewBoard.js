import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { postBoard } from '../actions';

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
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='name'
          name='name'
          value={inputValue.name}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='description'
          name='description'
          value={inputValue.description}
          onChange={onChange}
        />

        <button>Submit</button>
      </form>
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
