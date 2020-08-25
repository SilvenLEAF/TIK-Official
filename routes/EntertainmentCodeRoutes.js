const router = require('express').Router();
const entertainmentCodeController = require('../controllers/entertainmentCodeController');

const isLoggedIn = require('../middlewares/isLoggedIn, deleteEntertainmentCodePost');
const deleteEntertainmentCodePost = require('../middlewares/deleteEntertainmentCodePost')

router.get('/all', isLoggedIn, deleteEntertainmentCodePost, entertainmentCodeController.get_all_Entertainment_codes);
router.post('/postEntertainmentCode', isLoggedIn, deleteEntertainmentCodePost, entertainmentCodeController.post_your_entertainment_codes)
router.delete('/deleteEntertainmentCodePost', isLoggedIn, deleteEntertainmentCodePost, entertainmentCodeController.delete_your_entertainment_code_post);
router.put('/updateentErtainmentCodePost', isLoggedIn, deleteEntertainmentCodePost, entertainmentCodeController.update_your_Entertainment_code_post);


module.exports = router