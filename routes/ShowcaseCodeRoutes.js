const router = require('express').Router();
const showcaseCodeController = require('../controllers/showcaseCodeController');

const isLoggedIn = require('../middlewares/isLoggedIn');
const deleteShowcaseCodePost = require('../middlewares/deleteShowcaseCodePost')


router.get('/all', isLoggedIn, deleteShowcaseCodePost, showcaseCodeController.get_all_showcase_codes);
router.post('/postShowcaseCode', isLoggedIn, deleteShowcaseCodePost, showcaseCodeController.post_your_showcase_codes)
router.delete('/deleteShowcaseCodePost', isLoggedIn, deleteShowcaseCodePost, showcaseCodeController.delete_your_showcase_code_post);
router.put('/updateShowcaseCodePost', isLoggedIn, deleteShowcaseCodePost, showcaseCodeController.update_your_showcase_code_post);


module.exports = router