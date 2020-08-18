const router = require('express').Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');
const deleteAccount = require('../middlewares/deleteAccount')



router.get('/', auth, userController.get_logged_in_user);
router.get('/all', auth, userController.get_all_users);
router.put('/updateProfile', auth, userController.update_profile);
router.delete('/deleteProfile', auth, deleteAccount, userController.delete_account);




module.exports = router;