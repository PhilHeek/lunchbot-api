import yelp from 'yelp-fusion';
import config from '../config';

function getAllRestaurant() {
  const client = yelp.client(config.yelpApi.api_key);

  const searchRequest = {
    latitude: config.location.latitude,
    longitude: config.location.longitude,
    term: config.yelpPreferences.term,
    sortby: config.yelpPreferences.sortby,
    open_now: config.yelpPreferences.open_now,
    limit: config.yelpPreferences.limit
  };

  console.log('searchRequest: ', searchRequest);

  return client.search(searchRequest).then(response => {
    return response.jsonBody.businesses[0].name;
    // const restaurants = response.jsonBody.businesses;
    // const restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    // console.log('restaurant name:', restaurant.name);
  }).catch(e => {
    console.log(e);
  });
}

module.exports = { getAllRestaurant };
