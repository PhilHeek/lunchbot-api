import yelp from 'yelp-fusion';
import config from '../config';

function getAllRestaurant() {
  const client = yelp.client(config.yelpApi.api_key);

  console.log('toto')

  const searchRequest = {
    latitude: config.location.latitude,
    longitude: config.location.longitude,
    term: config.yelpPreferences.term,
    sortby: config.yelpPreferences.sortby,
    open_now: config.yelpPreferences.open_now,
    limit: config.yelpPreferences.limit
  };

  console.log('titi');

  return client.search(searchRequest).then(response => {
    if (response.jsonBody.businesses.length === 0) {
      console.log('empty businesses: ', response.jsonBody);
      return;
    }
    console.log('res: ', response);
    const restaurants = response.jsonBody.businesses;
    const restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];

    console.log('restaurants: ', restaurants);
    console.log('restaurant: ', restaurant)

    const establishment = {
      name: restaurant.name,
      rating: restaurant.rating,
      price: restaurant.price,
      isClosed: restaurant.is_closed,
      image: restaurant.image_url,
      coordinates: {
        latitude: restaurant.coordinates.latitude,
        longitude: restaurant.coordinates.longitude,
      },
    };

    return establishment;
  }).catch(e => {
    console.log('Error on fetch establishment: ', e);
  });
}

module.exports = { getAllRestaurant };
