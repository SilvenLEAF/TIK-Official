const canDeleteCodePost = require('../permissions/canDeleteCodePost');


const deleteBugCodePost = (req, res, next) =>{
  const { bugCodeId } = req.body; 

  if(!canDeleteCodePost(req.user, bugCodeId))     
    return res.status(401).json({ msg: `Not allowed.` });

  next();
}


module.exports = deleteBugCodePost;