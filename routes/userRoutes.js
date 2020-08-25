const router = require('express').Router();
const userController = require('../controllers/userController');

// ------------------------middlewares
const isLoggedIn = require('../middlewares/isLoggedIn')
const deleteAccount = require('../middlewares/deleteAccount')




//-------------------------GET LOGGED IN USER
router.get('/', isLoggedIn, (req, res, next)=>{
  res.json(req.user)
})







router.get('/all', userController.get_all_users);
router.delete('/deleteAccount', deleteAccount, userController.delete_account);
router.put('/updateProfile', isLoggedIn, userController.update_profile);


module.exports = router;