const User = require('../models/User');
const bcrypt = require('bcryptjs');



/* ----------------------------------------
.             GET LOGGED IN USER
---------------------------------------- */
module.exports.get_logged_in_user = async (req, res, next)=>{
  try {
    const user = await User.findById(req.user.id);

    res.json({
      id: user._id,
      userName: user.userName,
      location: user.location,
      developer: user.developer,
      skills: user.skills,
      about: user.about,
      role: user.role
    })

  } catch (err) {
    next(err, req, res);
  }
}








/* ----------------------------------------
.             GET ALL USERS
---------------------------------------- */
module.exports.get_all_users = async (req, res, next)=>{
  try {
    const allUsers = await User.find({});

    if(!allUsers) return res.json([]);

    const refinedUsers = [];

    allUsers.forEach((item, index)=>{
      const user = {
        id: item._id,
        userName: item.userName,
        location: item.location,
        developer: item.developer,
        skills: item.skills,
        about: item.about,
        role: item.role
      }
      
      refinedUsers.push(user);

    })


    res.json(refinedUsers)

  } catch (err) {
    next(err, req, res);
  }
}








/* ----------------------------------------
.             UPDATE PROFILE
---------------------------------------- */
module.exports.update_profile = async (req, res, next)=>{
  try {
    const { password } = req.body;

    // if there is a new password, hash it and then update the old one
    if(password){
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      await User.findByIdAndUpdate(req.user.id, {
        ...req.body,
        password: hashedPassword
      });
      
    } 
    // if there is no new password, update the rest
    else {
      await User.findByIdAndUpdate(req.user.id, req.body);
    }


    // send back the refined and safe data of the updatedUser
    const updatedUser = await User.findById(req.user.id);
      res.json({
        id: updatedUser._id,
        userName: updatedUser.userName,
        location: updatedUser.location,
        developer: updatedUser.developer,
        skills: updatedUser.skills,
        about: updatedUser.about,
        role: updatedUser.role
      });


  } catch (err) {
    next(err, req, res)
  }
}









/* ----------------------------------------
.             DELETE PROFILE
---------------------------------------- */
module.exports.delete_account = async (req, res, next)=>{
  const { userId } = req.body;

  const deletedUser = await User.findByIdAndDelete(userId);

  res.json({
    id: deletedUser._id,
    userName: deletedUser.userName,
    location: deletedUser.location,
    developer: deletedUser.developer,
    skills: deletedUser.skills,
    about: deletedUser.about,
    role: deletedUser.role
  })
}