import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectBoard } from '../actions';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: indianred;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: 'Roboto Slab', serif;
  text-shadow: 1px 1px 5px coral;
  text-transform: capitalize;
  text-decoration: none;

  &:hover {
    text-shadow: 1px 1px 5px white, 0px 0px 6px coral;
  }
`;

const Board = ({ board }) => {
  return (
    <div className='board-wrapper'>
      <StyledLink
        to={`/board/${board.id}`}
        onClick={() => selectBoard(board.id)}
      >
        {board.name}
      </StyledLink>
      <p>{board.description}</p>
    </div>
  );
};

export default connect(null, { selectBoard })(Board);
