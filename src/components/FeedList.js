import React, { useContext } from 'react';
import { FeedsContext } from '../context/FeedsContext';

const FeedList = () => {
  const { feeds, removeFeed } = useContext(FeedsContext);

  return (
    <div>
      <h2>Feeds</h2>
      <ul>
        {feeds.map((feed) => ( 
        <li key={feed.id}> 
        {feed.title} 
        <button type="button" onClick={() => removeFeed(feed.id)}> Remove 
        </button>
         </li> )
         )} 
         </ul>
          </div> 
          ); 
        };

export default FeedList