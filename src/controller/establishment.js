'use strict';

import yelpService from '../services/yelpService';

function listAllEstablishment (req, res) {

  console.log('query: ', req.params);
  yelpService.getAllRestaurant(req.params.latitude, req.params.longitude)
  .then(data => {
    let result = data;
    res.send(result);
  });

}

module.exports = { listAllEstablishment };
