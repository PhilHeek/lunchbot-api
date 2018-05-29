var _express = require('express');

var _express2 = _interopRequireDefault(_express);

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

var router = require('./routes/router')(server, {});

server.use(_bodyParser2['default'].urlencoded({ extended: true }));
server.use(_bodyParser2['default'].json());

server.use(function (req, res) {
  res.status(404).send({ url: req.oriinalUrl + ' not found' });
});

server.listen(port, function () {
  console.log('lunchbot API server started on: ' + port);
});

module.exports = server;