import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchArticles, deleteBoard } from '../actions';
import { Link } from 'react-router-dom';
import Article from './Article';
import Masonry from 'react-masonry-css';

const Articles = (props) => {
  useEffect(() => {
    props.fetchArticles(props.match.params.id);
  }, []);

  const breakpointColumnsObj = {
    default: 6,
    1100: 4,
  };

  const handleDelete = (e) => {
    e.preventDefault();

    props.deleteBoard(props.match.params.id);
    props.history.push('/dashboard');
  };

  return (
    <>
      <Link to={`/board/${props.match.params.id}/new-article`}>
        Create new Article
      </Link>
      <button onClick={handleDelete}>Delete Board</button>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {props.articles?.map((article) => (
          <Article article={article} />
        ))}
      </Masonry>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.article.isLoading,
    articles: state.article.articles,
  };
};

export default connect(mapStateToProps, { fetchArticles, deleteBoard })(
  Articles
);
