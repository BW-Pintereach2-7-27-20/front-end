import React from 'react';

const Article = ({ article }) => {
  return (
    <div className='board-wrapper'>
      <p>{article.title}</p>
      <p>{article.author}</p>
      <p>{article.url}</p>
    </div>
  );
};

export default Article;
