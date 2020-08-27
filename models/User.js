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
  initial: String,
  profileImage: String,
  location: {
    type: String,
    default: `Earth`
  },
  title: {
    type: String,
    default: `Mister Newbie`
  },
  about: {
    type: String,
    default: `Hello there Mr. Stranger! Wanna know about me? Well, there's not much to say! Hah ha!! I am a human from planet earth. I love all about tech. I wanna learn and explore the unknown, create new things and change the world. Let's be friends and learn and improve together.`
  },
  skills: {
    type: String,
    default: `nothing-to-show`
  },
  role: {
    type: String,
    default: `user`
  },
  createdAt: String
})



// creating User model
module.exports = User = mongoose.model('user', UserSchema);