const User = require('../models/User');



/* ----------------------------------------
.             GET LOGGED IN USER
---------------------------------------- */
module.exports.get_logged_in_user = async (req, res, next)=>{
  try {
    const user = await User.findById(req.user);

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