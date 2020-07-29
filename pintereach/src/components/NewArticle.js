import React, { useState, useEffect } from 'react';
import { postArticle } from '../actions';
import { connect } from 'react-redux';
import formSchema from '../validation/formSchema';

const initalValues = {
  url: '',
  title: '',
  author: '',
  host: '',
};

const NewArticle = (props) => {
  const [disabled, setDisabled] = useState(true);

  const [inputValue, setInputValue] = useState(initalValues);

  const onChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    props.postArticle(inputValue, props.match.params.id);
    props.history.push(`/board/${props.match.params.id}`);
  };

  useEffect(() => {
    formSchema.isValid(inputValue).then((valid) => {
      setDisabled(!valid);
    });
  }, [inputValue]);

  return (
    <div>
      <h2>Add an Article</h2>

      <form onSubmit={onSubmit} className='articleForm'>
        <label htmlFor='url'>url:</label>
        <input
          type='text'
          name='url'
          placeholder='newarticle.com/info'
          value={inputValue.url}
          onChange={onChange}
        />
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          name='title'
          placeholder='article title'
          value={inputValue.title}
          onChange={onChange}
        />
        <label htmlFor='author'>Author:</label>
        <input
          type='text'
          name='author'
          placeholder='author name'
          value={inputValue.author}
          onChange={onChange}
        />
        <label htmlFor='host'>Host:</label>
        <input
          type='text'
          name='host'
          placeholder='host'
          value={inputValue.host}
          onChange={onChange}
        />

        <button disabled={disabled}>Submit</button>
      </form>
    </div>
  );
};

export default connect(null, { postArticle })(NewArticle);
