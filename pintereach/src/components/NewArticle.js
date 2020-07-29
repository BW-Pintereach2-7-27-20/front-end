import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import formSchema from '../validation/formSchema';

const initialNewArticle = {
  url: '',
  title: '',
  author: '',
  host: '',
};

const NewArticle = (props) => {
  const [inputValue, setInputValue] = useState(initialNewArticle);
  const [disabled, setDisabled] = useState(true);

  const onChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    formSchema.isValid(inputValue).then((valid) => {
      setDisabled(!valid);
    });
  }, [inputValue]);

  return (
    <div>
      <h2>Add an Article</h2>

      <form className='articleForm'>
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

export default NewArticle;
