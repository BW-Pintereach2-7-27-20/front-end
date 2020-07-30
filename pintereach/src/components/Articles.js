import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchArticles, deleteBoard } from '../actions';
import Article from './Article';
import Masonry from 'react-masonry-css';
import CreateLink from '../styled/CreateLink';

import { useParams } from 'react-router-dom';

const Articles = (props) => {
  useEffect(() => {
    props.fetchArticles(props.match.params.id);
  }, []);
  useEffect(() => {}, [props.articles]);

  const breakpointColumnsObj = {
    default: 6,
    1100: 4,
  };

  const handleDelete = (e) => {
    e.preventDefault();

    props.deleteBoard(props.match.params.id);
    props.history.push('/dashboard');
  };

  console.log(props.articles);

  return (
    <>
      <CreateLink to={`/board/${props.match.params.id}/new-article`}>
        Create new Article
      </CreateLink>
      <button onClick={handleDelete}>Delete Board</button>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {props.articles &&
          props.articles.map((article) => (
            <Article key={article.id} article={article} />
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
