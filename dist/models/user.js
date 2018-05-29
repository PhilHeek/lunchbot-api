var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Schema = _mongoose2['default'].Schema;

var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  isDeleted: { type: Boolean, 'default': false },
  created_at: { type: Date, 'default': Date.now }
});

var User = _mongoose2['default'].model('User', userSchema);

module.exports = User;