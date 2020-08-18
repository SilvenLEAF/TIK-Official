const jwt = require('jsonwebtoken');
const User = require('../models/User');




const auth = async (req, res, next) =>{
  try {
    const token = req.header('x-auth-token');

    // 1) if there is no token
    if(!token) return res.status(401).json({ msg: `No authentication token, authorization denied.` });

    // 2) if there is a token then verify it
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if(!verified) return res.status(401).json({ msg: `Token verification failed, authorization denied.` });

    const findUser = await User.findById(verified.id);

    req.user = {
      id: findUser._id,
      userName: findUser.userName,
      location: findUser.location,
      developer: findUser.developer,
      skills: findUser.skills,
      about: findUser.about,
      role: findUser.role
    };

    next();
  } catch (err) {
    next(err,req,res)
  }
}



module.exports = auth;