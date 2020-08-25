const EntertainmentCode = require('../models/EntertainmentCode');
const isLoggedIn = require('../middlewares/isLoggedIn');


/* -----------------------------------
.     POST YOUR Entertainment CODE
----------------------------------- */
module.exports.post_your_Entertainment_codes = async (req, res, next)=>{
  try {
    const EntertainmentCodePost = await EntertainmentCode.create({
      ...req.body,
      ownerName: req.user.userName,
      ownerId: req.user._id
    });
    res.json(EntertainmentCodePost);
  } catch (err) {
    next(err, req, res)
  }
}



/* -----------------------------------
.    GET ALL Entertainment CODES
----------------------------------- */
module.exports.get_all_Entertainment_codes = async (req, res, next)=>{
  try {
    const allEntertainmentCodes = await EntertainmentCode.find({});
    res.json(allEntertainmentCodes);
  } catch (err) {
    next(err, req, res);
  }
}





/* -----------------------------------
.   DELETE Entertainment CODE POST
----------------------------------- */
module.exports.delete_your_Entertainment_code_post = async (req, res, next)=>{
  try {
    const { requestedEntertainmentCodeId } = req.body;

    const deletedEntertainmentCodePost = await EntertainmentCode.findByIdAndDelete(requestedEntertainmentCodeId);
    res.json(deletedEntertainmentCodePost)

  } catch (err) {
    next(err, req, res);
  }
}





/* -----------------------------------
.   UPDATE Entertainment CODE POST
----------------------------------- */
module.exports.update_your_Entertainment_code_post = async (req, res, next)=>{
  try {    
    const { requestedEntertainmentCodeId } = req.body;

    await EntertainmentCode.findByIdAndUpdate(requestedEntertainmentCodeId, req.body);
    const updatedEntertainmentCode = await EntertainmentCode.findById(requestedEntertainmentCodeId);

    res.json(updatedEntertainmentCode);

  } catch (err) {
    next(err, req, res);
  }
}