const router = require('express').Router();
const bugCodeController = require('../controllers/bugCodeController');

const isLoggedIn = require('../middlewares/isLoggedIn, deleteEntertainmentCodePost');
const deleteBugCodePost = require('../middlewares/deleteBugCodePost')

router.get('/all', isLoggedIn, deleteBugCodePost, bugCodeController.get_all_bug_codes);
router.post('/postBugCode', isLoggedIn, deleteBugCodePost, bugCodeController.post_your_bug_codes)
router.delete('/deleteBugCodePost', isLoggedIn, deleteBugCodePost, bugCodeController.delete_your_bug_code_post);
router.put('/updateBugCodePost', isLoggedIn, deleteBugCodePost, bugCodeController.update_your_bug_code_post);


module.exports = router