'use strict';

import establishment from '../controller/establishment';

module.exports = app => {
  app.route('/establishments/:latitude&:longitude')
    .get(establishment.listAllEstablishment);
};
