const User = require('../models/User');
const chalk = require('chalk');

const passport = require('passport');
const oauthKeys = require('./oauthKeys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GithubStrategy = require('passport-github').Strategy;



/* ----------------------------------------
.          Serialize and Deserialize
---------------------------------------- */
passport.serializeUser((user, done)=>{
  done(null, user.id);
})

passport.deserializeUser((id, done)=>{
  User.findById(id).then((user)=>{
    done(null, user);
  })
})







/* ----------------------------------------
.             GOOGLE STRATEGY
---------------------------------------- */
passport.use( new GoogleStrategy(
  {
    clientID: oauthKeys.GOOGLE.clientID,
    clientSecret: oauthKeys.GOOGLE.clientSecret,
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done)=>{
    console.log(JSON.stringify(profile));
    User.findOne({ 'google.id': profile.id, }).then((existingUser)=>{
      if(existingUser){
        return done(null, existingUser)
      } else {
        User.create({ 
          userName: profile.displayName,
          'google.googleId': profile.id,
          'google.userName': profile.displayName,
          'google.email': profile.emails[0].value,          
          'google.image': profile.photos[0].value,          
        })
          .then((newUser)=>{
            return done(null, newUser);
          })
      }
    })    

  }
))








/* ----------------------------------------
.             GITHUB STRATEGY
---------------------------------------- */
passport.use( new GithubStrategy(
  {
    clientID: oauthKeys.GITHUB.clientID,
    clientSecret: oauthKeys.GITHUB.clientSecret,
    callbackURL: '/auth/github/callback'
  },
  (accessToken, refreshToken, profile, done)=>{
    console.log(chalk.red(JSON.stringify(profile)));
    User.findOne({ 'github.githubId': profile.id }).then((existingUser)=>{
      if(existingUser){
        return done(null, existingUser)
      } else {
        User.create({ 
          userName: profile.displayName,
          'github.githubId': profile.id,
          'github.userName': profile.displayName,
          'github.email': profile.emails[0].value,          
          'github.image': profile.photos[0].value,          
        })
          .then((newUser)=>{
            return done(null, newUser);
          })
      }
    })    

  }
))