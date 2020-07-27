import React from 'react';

const NewBoard = () => {
  return (
    <div>
      <form>
        <input type='text' placeholder='title' />
        <input type='text' placeholder='description' />
        <input type='text' placeholder='testing' />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewBoard;
