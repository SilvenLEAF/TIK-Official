const router = require('express').Router();
const authContollers = require('../controllers/authControllers');



router.post('/signup', authContollers.signup);
router.post('/login', authContollers.login);
router.post('/verifyToken', authContollers.verify_token);


module.exports = router;