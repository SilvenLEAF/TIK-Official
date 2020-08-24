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
    res.redirect('/profile')
  }
)






/* ----------------------------------------
.               GITHUB
---------------------------------------- */

router.get('/auth/github', passport.authenticate('github', {
  scope: ['profile', 'email']
}))


router.get('/auth/github/callback',
  passport.authenticate('github'),
  (req, res)=>{
    res.redirect('/profile')
  }
)





module.exports = router;