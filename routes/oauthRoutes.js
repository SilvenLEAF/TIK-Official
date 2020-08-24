const router = require('express').Router();
const passport = require('passport');





router.get('/auth/logout', (req, res)=>{
  req.logOut();
  res.redirect('/')
})
/* ----------------------------------------
.               GOOGLE
---------------------------------------- */

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}))


router.get('/auth/google/callback',
  passport.authenticate('google'),
  (req, res)=>{
    res.redirect('/')
  }
)






/* ----------------------------------------
.               GITHUB
---------------------------------------- */

router.get('/auth/github', passport.authenticate('github'))


router.get('/auth/github/callback',
  passport.authenticate('github'),
  (req, res)=>{
    res.redirect('/')
  }
)










/* ----------------------------------------
.               FACEBOOK
---------------------------------------- */

router.get('/auth/facebook', passport.authenticate('facebook'))


router.get('/auth/facebook/callback',
  passport.authenticate('facebook'),
  (req, res)=>{
    res.redirect('/')
  }
)






module.exports = router;