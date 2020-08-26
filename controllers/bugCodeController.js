const BugCode = require('../models/BugCode');
const isLoggedIn = require('../middlewares/isLoggedIn');


/* -----------------------------------
.        POST YOUR BUG CODE
----------------------------------- */
module.exports.post_your_bug_codes = async (req, res, next)=>{
  try {
    const bugCodePost = await BugCode.create({
      ...req.body,
      createdAt: new Date(),
      // ownerName: req.user.userName,      
      // ownerId: req.user._id
    });
    res.json(bugCodePost);
  } catch (err) {
    next(err, req, res)
  }
}



/* -----------------------------------
.           GET ALL BUG CODES
----------------------------------- */
module.exports.get_all_bug_codes = async (req, res, next)=>{
  try {
    const allBugCodes = await BugCode.find({});
    res.json(allBugCodes.reverse());
  } catch (err) {
    next(err, req, res);
  }
}





/* -----------------------------------
.        DELETE BUG CODE POST
----------------------------------- */
module.exports.delete_your_bug_code_post = async (req, res, next)=>{
  try {
    const { bugCodeId } = req.body;

    const deletedBugCodePost = await BugCode.findByIdAndDelete(bugCodeId);
    res.json(deletedBugCodePost)

  } catch (err) {
    next(err, req, res);
  }
}





/* -----------------------------------
.        UPDATE BUG CODE POST
----------------------------------- */
module.exports.update_your_bug_code_post = async (req, res, next)=>{
  try {    
    const { bugCodeId } = req.body;

    await BugCode.findByIdAndUpdate(bugCodeId, req.body);
    const updatedBugCode = await BugCode.findById(bugCodeId);

    res.json(updatedBugCode);

  } catch (err) {
    next(err, req, res);
  }
}