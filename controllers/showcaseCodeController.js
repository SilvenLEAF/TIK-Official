const ShowcaseCode = require('../models/ShowcaseCode');


/* -----------------------------------
.        POST YOUR Showcase CODE
----------------------------------- */
module.exports.post_your_showcase_codes = async (req, res, next)=>{
  try {
    const ShowcaseCodePost = await ShowcaseCode.create({
      ...req.body,
      createdAt: new Date(),
      ownerName: req.user.userName,
      ownerId: req.user._id
    });
    res.json(ShowcaseCodePost);
  } catch (err) {
    next(err, req, res)
  }
}



/* -----------------------------------
.           GET ALL Showcase CODES
----------------------------------- */
module.exports.get_all_showcase_codes = async (req, res, next)=>{
  try {
    const allShowcaseCodes = await ShowcaseCode.find({});
    res.json(allShowcaseCodes);
  } catch (err) {
    next(err, req, res);
  }
}





/* -----------------------------------
.        DELETE Showcase CODE POST
----------------------------------- */
module.exports.delete_your_showcase_code_post = async (req, res, next)=>{
  try {
    const { showcaseCodeId } = req.body;

    const deletedShowcaseCodePost = await ShowcaseCode.findByIdAndDelete(showcaseCodeId);
    res.json(deletedShowcaseCodePost)

  } catch (err) {
    next(err, req, res);
  }
}





/* -----------------------------------
.        UPDATE Showcase CODE POST
----------------------------------- */
module.exports.update_your_showcase_code_post = async (req, res, next)=>{
  try {    
    const { showcaseCodeId } = req.body;

    await ShowcaseCode.findByIdAndUpdate(showcaseCodeId, req.body);
    const updatedShowcaseCode = await ShowcaseCode.findById(showcaseCodeId);

    res.json(updatedShowcaseCode);

  } catch (err) {
    next(err, req, res);
  }
}