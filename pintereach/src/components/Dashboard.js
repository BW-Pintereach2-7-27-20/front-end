import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBoards } from '../actions';
import { Link } from 'react-router-dom';
import Board from './Board';
import Masonry from 'react-masonry-css';
import styled from 'styled-components'; 

const StyledCreateLink = styled(Link)`
  color: indianred;
  font-family: 'Roboto Slab', serif;
  font-weight: bold;
  text-decoration: none;
  border: 1px solid white;
  width: 10vw;
  line-height: 2rem;
  margin-top: 1%;
  margin-bottom: 1%;
  margin-left: 2%;
  background-color: lavenderblush;
  border-radius: 5%;
  -webkit-box-shadow: 18px 10px 29px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 18px 10px 29px 1px rgba(0,0,0,0.75);
  box-shadow: 18px 10px 29px 1px rgba(0,0,0,0.75);
`;

const Dashboard = (props) => {
  console.log(props);
  useEffect(() => {
    props.fetchBoards();
  }, [props.message]);

  const breakpointColumnsObj = {
    default: 6,
    1100: 4,
  };

  return (
    <div>
      <StyledCreateLink to='/new-board'>Create new Board</StyledCreateLink>

      {props.isLoading && <span className='loading'>Loading Boards...</span>}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {props.boards ? (
          props.boards.map((board) => <Board key={board.id} board={board} />)
        ) : (
          <span>no boards here</span>
        )}
      </Masonry>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.board.isLoading,
    boards: state.board.boards,
    message: state.board.message,
  };
};

export default connect(mapStateToProps, { fetchBoards })(Dashboard);
