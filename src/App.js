import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FeedsProvider } from './context/FeedsContext';
import Login from './components/Login';
import FeedList from './components/FeedList';
import FeedArticles from './components/FeedArticles';
import ArticleDetail from './components/ArticleDetail';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (username) => {
    setCurrentUser(username);
  };

  return (
    <FeedsProvider>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Login onLogin={handleLogin} />} />
          <Route path="/feeds" component={FeedList} />
          <Route path="/articles/:feedId" component={FeedArticles} />
          <Route path="/article/:articleId" component={ArticleDetail} />
        </Switch>
      </Router>
    </FeedsProvider>
  );
};

export default App;