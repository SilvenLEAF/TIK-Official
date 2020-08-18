const canDeleteProfile = require('../permissions/canDeleteProfile');
const { response } = require('express');

const deleteProfile = (req, res, next) =>{
  const { userId } = req.body;
  
  const oh = canDeleteProfile(req.user, userId)
  console.log(oh)

  if(!canDeleteProfile(req.user, userId))     
    return res.status(401).json({ msg: `Not allowed.` });

  next();
}


module.exports = deleteProfile;