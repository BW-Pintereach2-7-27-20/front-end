import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBoards } from '../actions';

const Dashboard = (props) => {
  useEffect(() => {
    props.fetchBoards();
  }, []);

  return (
    <div>
      <div className='board-wrapper'>
        <h2>Board Title</h2>
        <ul>
          <li>
            <img src='' alt='article thumbnail' />
            <p>Article title</p>
          </li>
        </ul>
      </div>
      <Link to='/new-board'>Create new Board</Link>
      {props.isLoading && <span>Loading Boards...</span>}
      {props.boards &&
        props.boards.map((board) => (
          <div>
            <Link to={`/boards/${board.id}`} key={board.id}>
              {board.name}
            </Link>
            <p>{board.description}</p>
          </div>
        ))}
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
