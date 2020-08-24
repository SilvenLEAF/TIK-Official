const router = require('express').Router();
const isLoggedIn = require('../middlewares/isLoggedIn')

router.get('/', isLoggedIn, (req, res, next)=>{
  res.json(req.user)
})

module.exports = router;