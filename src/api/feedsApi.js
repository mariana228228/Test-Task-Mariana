import axios from 'axios';

const feedsApi = {
  getFeeds: async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data.map((post) => ({
      id: post.id,
      title: post.title,
      body: post.body,
    }));
  },
  // Add other API functions here
};

export default feedsApi;