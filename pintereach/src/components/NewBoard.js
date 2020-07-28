import React from 'react';

const initialNewBoard = {
  title: '', 
  description: '', 

}

const NewBoard = () => {
  return (
    <div>
      <form>
        <label htmlFor='title'>Board Title:</label>
          <input 
          type='text'
          name='title'
          placeholder='New board title'
          />
        <label htmlFor='board description'>Description:</label>
        <input 
          type='text'
          name='description'
          placeholder='Describe new board'
          />
          
        <input type='text' placeholder='testing' />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewBoard;
