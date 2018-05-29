import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    isDeleted: {type: Boolean, default: false},
    created_at: {type: Date, default: Date.now}
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
