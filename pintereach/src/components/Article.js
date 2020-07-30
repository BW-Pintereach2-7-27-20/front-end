import React from 'react';
import { connect } from 'react-redux';
import { deleteArticle } from '../actions';
import { Link } from 'react-router-dom';
import LogoutDelBtn from '../styled/LogoutDelBtn'; 

import styled from 'styled-components'; 

const ContentWrapper = styled.div`
  line-height: 125%;

  p {
    margin-top: 1%;
    margin-bottom: 1%;
  }
  
  .title {
    color: indianred;
    font-family: 'Roboto Slab', serif;
    font-weight: bold;
    font-size: 1.2rem; 
  }

  .url {
    margin-bottom: 5%;
  }
`


const Article = (props) => {
  return (
    <div className='board-wrapper'>
      <ContentWrapper>
      <p className='title'>{props.article.title}</p>
      <hr />
      <p>{props.article.author}</p>
      <p className='url'><a href={props.article.url}>{props.article.title}</a></p>
      <Link to={`/article/${props.article.id}/edit`}>Edit</Link>
      <button onClick={() => props.deleteArticle(props.article.id)}>
        Delete
      </button>
      </ContentWrapper>
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
