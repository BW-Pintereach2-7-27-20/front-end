import React from 'react';
import { Link } from 'react-router-dom';

const Board = ({ board }) => {
  return (
    <div className='board-wrapper'>
      <Link to={`/boards/${board.id}`}>{board.name}</Link>
      <p>{board.description}</p>
    </div>
  );
};

export default Board;
