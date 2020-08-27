const EntertainmentCode = require('../models/EntertainmentCode');



/* -----------------------------------
.     POST YOUR Entertainment CODE
----------------------------------- */
module.exports.post_your_entertainment_codes = async (req, res, next)=>{
  try {
    const entertainmentCodePost = await EntertainmentCode.create({
      ...req.body,
      createdAt: new Date(),      
      ownerName: req.user.userName,
      ownerId: req.user._id
    });
    res.json(entertainmentCodePost);
  } catch (err) {
    next(err, req, res)
  }
}



/* -----------------------------------
.    GET ALL Entertainment CODES
----------------------------------- */
module.exports.get_all_entertainment_codes = async (req, res, next)=>{
  try {
    const allEntertainmentCodes = await EntertainmentCode.find({});
    res.json(allEntertainmentCodes.reverse());
  } catch (err) {
    next(err, req, res);
  }
}





/* -----------------------------------
.   DELETE Entertainment CODE POST
----------------------------------- */
module.exports.delete_your_entertainment_code_post = async (req, res, next)=>{
  try {
    const { entertainmentCodeId } = req.body;

    const deletedEntertainmentCodePost = await EntertainmentCode.findByIdAndDelete(entertainmentCodeId);
    res.json(deletedEntertainmentCodePost)

  } catch (err) {
    next(err, req, res);
  }
}





/* -----------------------------------
.   UPDATE Entertainment CODE POST
----------------------------------- */
module.exports.update_your_entertainment_code_post = async (req, res, next)=>{
  try {    
    const { entertainmentCodeId } = req.body;

    await EntertainmentCode.findByIdAndUpdate(entertainmentCodeId, req.body);
    const updatedEntertainmentCode = await EntertainmentCode.findById(entertainmentCodeId);

    res.json(updatedEntertainmentCode);

  } catch (err) {
    next(err, req, res);
  }
}