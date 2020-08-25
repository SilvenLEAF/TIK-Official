const canDeleteCodePost = require('../permissions/canDeleteCodePost');


const deleteShowcaseCodePost = (req, res, next) =>{
  const { showcaseCodeId } = req.body; 

  if(!canDeleteCodePost(req.user, showcaseCodeId))     
    return res.status(401).json({ msg: `Not allowed.` });

  next();
}


module.exports = deleteShowcaseCodePost;