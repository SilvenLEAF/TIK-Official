const router = require('express').Router();
const auth = require('../middlewares/auth');
const userController = require('../controllers/userController');



router.get('/', auth, userController.get_logged_in_user);
router.get('/all', auth, userController.get_all_users);




module.exports = router;