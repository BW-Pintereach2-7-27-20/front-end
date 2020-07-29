import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectBoard } from '../actions';


const Board = ({ board }) => {
  return (
    <div className='board-wrapper'>
      <Link to={`/board/${board.id}`} onClick={() => selectBoard(board.id)}>
        {board.name}
      </Link>
      <p>{board.description}</p>
    </div>
  );
};

export default connect(null, { selectBoard })(Board);
