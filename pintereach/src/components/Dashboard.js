import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBoards } from '../actions';
import { Link } from 'react-router-dom';
import Board from './Board';
import Masonry from 'react-masonry-css';

const Dashboard = (props) => {
  console.log(props);
  useEffect(() => {
    props.fetchBoards();
  }, []);

  const breakpointColumnsObj = {
    default: 6,
    1100: 4,
  };

  return (
    <div>
      <Link to='/new-board'>Create new Board</Link>

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
  };
};

export default connect(mapStateToProps, { fetchBoards })(Dashboard);
