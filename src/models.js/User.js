const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add fields for profile picture, bio, etc.
  profilePicture: { type: String },
  bio: { type: String },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  watches: [{ type: Schema.Types.ObjectId, ref: 'Watch' }]
});

module.exports = mongoose.model('User', UserSchema);
