var _yelpFusion = require('yelp-fusion');

var _yelpFusion2 = _interopRequireDefault(_yelpFusion);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var searchRequest = {
  latitude: _config2['default'].location.latitude,
  longitude: _config2['default'].location.longitude,
  term: _config2['default'].yelpPreferences.term,
  sortby: _config2['default'].yelpPreferences.sortby,
  open_now: _config2['default'].yelpPreferences.open_now,
  limit: _config2['default'].yelpPreferences.limit
};

function getAllRestaurant() {
  var client = _yelpFusion2['default'].client(_config2['default'].yelpApi.api_key);

  client.search(searchRequest).then(function (response) {
    console.log(response.jsonBody.name);
    return response.jsonBody.name;
    // const restaurants = response.jsonBody.businesses;
    // const restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    // console.log('restaurant name:', restaurant.name);
  })['catch'](function (e) {
    console.log(e);
  });
}

module.exports = { getAllRestaurant: getAllRestaurant };