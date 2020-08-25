const canDeleteAccount = require('../permissions/canDeleteAccount');


const deleteAccount = (req, res, next) =>{
  const { requestedUserId } = req.body; 

  if(!canDeleteAccount(req.user, requestedUserId))     
    return res.status(401).json({ msg: `Not allowed.` });

  next();
}


module.exports = deleteAccount;