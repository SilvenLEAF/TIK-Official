const router = require('express').Router();
const bugCodeController = require('../controllers/bugCodeController');

const isLoggedIn = require('../middlewares/isLoggedIn');
const deleteBugCodePost = require('../middlewares/deleteBugCodePost')

router.get('/all', isLoggedIn, deleteBugCodePost, bugCodeController.get_all_bug_codes);
router.post('/', isLoggedIn, deleteBugCodePost, bugCodeController.post_your_bug_codes)
router.delete('/', isLoggedIn, deleteBugCodePost, bugCodeController.delete_your_bug_code_post);
router.put('/', isLoggedIn, deleteBugCodePost, bugCodeController.update_your_bug_code_post);


// router.get('/all', bugCodeController.get_all_bug_codes);
// router.post('/', bugCodeController.post_your_bug_codes)
// router.delete('/', bugCodeController.delete_your_bug_code_post);
// router.put('/', bugCodeController.update_your_bug_code_post);


module.exports = router