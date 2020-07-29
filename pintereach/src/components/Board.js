import React from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';

const Board = ({ board }) => {
  return (
    <div className='board-wrapper'>
      <Link to={`/boards/${board.id}`} key={board.id}>
        {board.name}
      </Link>
      <p>{board.description}</p>
    </div>
  );
};

export default Board;
