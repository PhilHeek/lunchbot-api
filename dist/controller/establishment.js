'use strict';

var _yelpService = require('../services/yelpService');

var _yelpService2 = _interopRequireDefault(_yelpService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function listAllEstablishment(req, res) {
  // res.send(yelpService.getAllRestaurant());
  res.send('TOTO');
}

function getSingleEstablishment(req, res) {
  res.send('SingleEstablishment');
}

module.exports = { listAllEstablishment: listAllEstablishment, getSingleEstablishment: getSingleEstablishment };