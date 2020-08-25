const User = require('../models/User');


/* -----------------------------------
.           GET ALL USERS
----------------------------------- */
module.exports.get_all_users = async (req, res, next)=>{
  try {
    const allUsers = await User.find({});
    res.json(allUsers);
  } catch (err) {
    next(err, req, res);
  }
}



/* -----------------------------------
.           DELETE ACCOUNT
----------------------------------- */
module.exports.delete_account = async (req, res, next)=>{
  try {
    const { requestedUserId } = req.body;

    const deletedUser = await User.findByIdAndDelete(requestedUserId);
    res.json(deletedUser)

  } catch (err) {
    next(err, req, res);
  }
}











/* -----------------------------------
.           UPDATE PROFILE
----------------------------------- */
module.exports.update_profile = async (req, res, next)=>{
  try {    
    await User.findByIdAndUpdate(req.user._id, req.body);
    const updatedUser = await User.findById(req.user._id);

    res.json(updatedUser);

  } catch (err) {
    next(err, req, res);
  }
}