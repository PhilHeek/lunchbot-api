'use strict';

import yelpService from '../services/yelpService';

function listAllEstablishment(req, res) {
  yelpService.getAllRestaurant()
  .then(data => {
    let result = data;
    res.send(result);
  });

}

function getSingleEstablishment(req, res) {
  res.send('SingleEstablishment');
}

module.exports = { listAllEstablishment, getSingleEstablishment };
