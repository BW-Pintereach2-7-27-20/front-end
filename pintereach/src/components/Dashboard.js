import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBoards } from '../actions';
import Board from './Board';
import Masonry from 'react-masonry-css';

const Dashboard = (props) => {
  useEffect(() => {
    props.fetchBoards();
  }, []);

  const breakpointColumnsObj = {
    default: 6,
  };

  return (
    <div>
      <Link to='/new-board'>Create new Board</Link>
      {props.isLoading && <span>Loading Boards...</span>}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {props.boards && props.boards.map((board) => <Board board={board} />)}
      </Masonry>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    boards: state.boards,
  };
};

export default connect(mapStateToProps, { fetchBoards })(Dashboard);
