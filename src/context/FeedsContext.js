import { createContext, useState, useEffect } from 'react';
import feedsApi from '../api/feedsApi';

const FeedsContext = createContext();

const FeedsProvider = ({ children }) => {
  const [feeds, setFeeds] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    feedsApi.getFeeds().then((fetchedFeeds) => {
      setFeeds(fetchedFeeds);
    });
  }, []);

  const addFeed = (newFeed) => {
    setFeeds([...feeds, newFeed]);
  };

  const removeFeed = (feedId) => {
    setFeeds(feeds.filter((feed) => feed.id !== feedId));
  };

  return (
    <FeedsContext.Provider value={{ feeds, currentUser, addFeed, removeFeed }}>
      {children}
    </FeedsContext.Provider>
  );
};

export { FeedsContext, FeedsProvider };