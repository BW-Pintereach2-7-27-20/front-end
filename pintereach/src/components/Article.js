import React from 'react';
import { connect } from 'react-redux';
import { deleteArticle } from '../actions';
import { Link } from 'react-router-dom';

const Article = (props) => {
  return (
    <div className='board-wrapper'>
      <p>{props.article.title}</p>
      <p>{props.article.author}</p>
      <p>{props.article.url}</p>

      <button onClick={() => props.deleteArticle(props.article.id)}>
        Delete
      </button>
      <Link to={`/article/${props.article.id}/edit`}>Edit</Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.article.isLoading,
    articles: state.article.articles,
  };
};

export default connect(mapStateToProps, { deleteArticle })(Article);
