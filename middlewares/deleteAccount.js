const canDeleteAccount = require('../permissions/canDeleteAccount');


const deleteAccount = (req, res, next) =>{
  const { userId } = req.body; 

  if(!canDeleteAccount(req.user, userId))     
    return res.status(401).json({ msg: `Not allowed.` });

  next();
}


module.exports = deleteAccount;