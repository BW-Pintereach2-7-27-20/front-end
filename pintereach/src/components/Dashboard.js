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
      <h2>Boards Go here</h2>
      <Link to='/new-board'>Create new Board</Link>
      {props.isLoading && <span>Loading Boards...</span>}
      {console.log(props.isLoading)}
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
