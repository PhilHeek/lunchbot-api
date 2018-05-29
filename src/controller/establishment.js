'use strict';

import yelpService from '../services/yelpService';

function listAllEstablishment(req, res) {
  // res.send(yelpService.getAllRestaurant());
  res.send('TOTO');

}

function getSingleEstablishment(req, res) {
  res.send('SingleEstablishment');
}

module.exports = { listAllEstablishment, getSingleEstablishment };
