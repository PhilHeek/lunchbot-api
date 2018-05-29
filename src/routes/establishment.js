'use strict';

import establishment from '../controller/establishment';

module.exports = app => {
  app.route('/establishment')
    .get(establishment.listAllEstablishment)
    .get(establishment.getSingleEstablishment);
};
