import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBoards } from '../actions';
import { Link } from 'react-router-dom';
import Board from './Board';
import Masonry from 'react-masonry-css';
import CreateLink from '../styled/CreateLink'; 

const Dashboard = (props) => {
  console.log(props);
  useEffect(() => {
    props.fetchBoards();
  }, [props.message]);

  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
  };

  return (
    <div>
      <CreateLink to='/new-board'>Create new Board</CreateLink>

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
