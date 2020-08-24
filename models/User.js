const mongoose = require('mongoose');

/* --------------------------
.         SUB SCHEMAS
-------------------------- */
const GoogleSchema = new mongoose.Schema({
  googleId: {
    type: String,
  },
  userName: String,
  email: { 
    type: String, 
  }, 
  image: String,
})




const GithubSchema = new mongoose.Schema({
  githubId: {
    type: String,   
  },
  userName: String,
  email: { 
    type: String,   
  }, 
  image: String,
})







const FacebookSchema = new mongoose.Schema({
  FacebookId: {
    type: String,
  },
  userName: String,
  email: { 
    type: String, 
  }, 
  image: String,
})






/* --------------------------
.         USER SCHEMA
-------------------------- */
const UserSchema = new mongoose.Schema({  
  google: GoogleSchema,
  github: GithubSchema,
  facebook: FacebookSchema,
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