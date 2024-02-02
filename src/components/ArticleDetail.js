import React, { useContext } from 'react';
import { FeedsContext } from '../context/FeedsContext';

const ArticleDetail = ({ match }) => {
  const { feeds } = useContext(FeedsContext);
  const articleId = parseInt(match.params.articleId, 10);
  const feed = feeds.find((f) => f.articles.some((a) => a.id === articleId));
  const article = feed ? feed.articles.find((a) => a.id === articleId) : null;

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
    </div>
  );
};

export default ArticleDetail;