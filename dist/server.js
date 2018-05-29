var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _user = require('./models/user');

var _user2 = _interopRequireDefault(_user);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _yelpFusion = require('yelp-fusion');

var _yelpFusion2 = _interopRequireDefault(_yelpFusion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var server = (0, _express2['default'])();
var port = process.env.PORT || 3000;


server.use((0, _morgan2['default'])('dev'));

// mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// mongoose.connect(config.mongoURI[server.settings.env], function (err, res) {
//   if(err) {
//     console.log('Error connecting to the database. ' + err);
//   } else {
//     console.log('Connected to Database: ' + config.mongoURI[server.settings.env]);
//   }
// });

var client = _yelpFusion2['default'].client(_config2['default'].yelpApi.api_key);

var searchRequest = {
  latitude: _config2['default'].location.latitude,
  longitude: _config2['default'].location.longitude,
  term: _config2['default'].yelpPreferences.term,
  sortby: _config2['default'].yelpPreferences.sortby,
  open_now: _config2['default'].yelpPreferences.open_now,
  limit: _config2['default'].yelpPreferences.limit
};

client.search(searchRequest).then(function (response) {
  var restaurants = response.jsonBody.businesses;
  var restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
  console.log('restaurant name:', restaurant.name);
})['catch'](function (e) {
  console.log(e);
});

server.use(_bodyParser2['default'].urlencoded({ extended: true }));
server.use(_bodyParser2['default'].json());

//router
//require('./api/routes/router')(server, {});

//populate.populate();

server.use(function (req, res) {
  res.status(404).send({ url: req.oriinalUrl + ' not found' });
});

server.listen(port, function () {
  console.log('lunchbot API server started on: ' + port);
});

module.exports = server;