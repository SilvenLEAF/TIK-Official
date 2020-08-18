const router = require('express').Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');
const deleteProfile = require('../middlewares/deleteProfile')



router.get('/', auth, userController.get_logged_in_user);
router.get('/all', auth, userController.get_all_users);
router.post('/updateProfile', auth, userController.update_profile);
router.delete('/deleteProfile', auth, deleteProfile, userController.delete_profile);




module.exports = router;