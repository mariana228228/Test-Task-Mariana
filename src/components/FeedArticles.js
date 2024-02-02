
import React, { useContext } from 'react';
import { FeedsContext } from '../context/FeedsContext';

const FeedArticles = ({ match }) => {
  const { feeds } = useContext(FeedsContext);
  const feedId = parseInt(match.params.feedId, 10);
  const feed = feeds.find((f) => f.id === feedId);

  if (!feed) {
    return <div>Feed not found</div>;
  }

  return (
    <div>
      <h2>{feed.title}</h2>
      <ul>
        {feed.articles.map((article) => (
          <li key={article.id}>
            <a href={`/article/${article.id}`}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedArticles;