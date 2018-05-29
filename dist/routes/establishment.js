'use strict';

var _establishment = require('../controller/establishment');

var _establishment2 = _interopRequireDefault(_establishment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

module.exports = function (app) {
  app.route('/establishment').get(_establishment2['default'].listAllEstablishment).get(_establishment2['default'].getSingleEstablishment);
};