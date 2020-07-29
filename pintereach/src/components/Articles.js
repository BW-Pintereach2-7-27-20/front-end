import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchArticles, deleteBoard } from '../actions';
import { Link } from 'react-router-dom';
import Article from './Article';
import CreateLink from '../styled/CreateLink'; 

import { useParams } from 'react-router-dom';

const Articles = (props) => {
  useEffect(() => {
    props.fetchArticles();
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();

    props.deleteBoard(props.match.params.id);
    props.history.push('/dashboard');
  };

  return (
    <>
      <CreateLink to='/new-article'>Create new Article</CreateLink>
      <button onClick={handleDelete}>Delete Board</button>
      {props.articles?.map((article) => (
        <Article article={article} />
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    articles: state.articles,
  };
};

export default connect(mapStateToProps, { fetchArticles, deleteBoard })(
  Articles
);
