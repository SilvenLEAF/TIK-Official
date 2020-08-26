const router = require('express').Router();
const entertainmentCodeController = require('../controllers/entertainmentCodeController');

const isLoggedIn = require('../middlewares/isLoggedIn');
const deleteEntertainmentCodePost = require('../middlewares/deleteEntertainmentCodePost')

// router.get('/all', isLoggedIn, deleteEntertainmentCodePost, entertainmentCodeController.get_all_entertainment_codes);
// router.post('/', isLoggedIn, deleteEntertainmentCodePost, entertainmentCodeController.delete_your_entertainment_code_post)
// router.delete('/', isLoggedIn, deleteEntertainmentCodePost, entertainmentCodeController.delete_your_entertainment_code_post);
// router.put('/', isLoggedIn, deleteEntertainmentCodePost, entertainmentCodeController.update_your_entertainment_code_post);


router.get('/all', entertainmentCodeController.get_all_entertainment_codes);
router.post('/', entertainmentCodeController.post_your_entertainment_codes)
router.delete('/', entertainmentCodeController.delete_your_entertainment_code_post);
router.put('/', entertainmentCodeController.update_your_entertainment_code_post);


module.exports = router