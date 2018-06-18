const config = {
  mongoURI: {
    development: 'mongodb://localhost:27018/lunch-bot-api-dev',
    test: 'mongodb://localhost:27018/lunch-bot-api-test'
  },
  yelpApi: {
    api_key: '7XEFHafpgmUH3jxv9bxZaBhwFM4ccVYDtfuYYlJ8KO4aTZu3WvYcnzQ7jDsrArUiRI0yDx2fVkzZwRwa9VFQl--cTxjL9tW0XijWXmzD-Jv0mJUBirNuzXMp_z-IWnYx'
  },
  location: {
    latitude: '48.862334',
    longitude: '2.350453'
  },
  yelpPreferences: {
    term: 'food, restaurants',
    categories: 'restaurants',
    sortby: 'rating, review_count',
    open_now: false,
    limit: 20
  }
};

module.exports = config;
