const mongoose = require('mongoose');

// creating UserSchema
const UserSchema = new mongoose.Schema({
  email: { 
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  userName: {
    type: String
  },
  location: {
    type: String,
    default: `Earth`
  },
  developer: {
    type: String,
    developer: `FrontEND`
  },
  about: {
    type: String,
    default: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem perferendis expedita labore, inventore amet quas illo hic consequuntur mollitia excepturi! Libero quas nostrum illo veritatis eligendi ex ducimus, voluptatibus incidunt sed inventore ipsam quo assumenda officia quibusdam. Excepturi aperiam, dolor dignissimos recusandae hic provident magnam maiores, itaque aut, officiis placeat.`
  },
  skills: {
    type: String,
    default: `no skills yet`
  },
  role: {
    type: String,
    default: `user`
  }
})



// creating User model
module.exports = User = mongoose.model('user', UserSchema);