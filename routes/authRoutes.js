const router = require('express').Router();
const authContoller = require('../controllers/authController');



router.post('/signup', authContoller.signup);
router.post('/login', authContoller.login);
router.post('/verifyToken', authContoller.verify_token);


module.exports = router;