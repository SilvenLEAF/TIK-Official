const canDeleteEntertainmentCodePost = require('../permissions/canDeleteEntertainmentCodePost');


const deleteEntertainmentCodePost = (req, res, next) =>{
  const { entertainmentCodeId } = req.body;
  
  if(!canDeleteEntertainmentCodePost(req.user, entertainmentCodeId))     
    return res.status(401).json({ msg: `Not allowed.` });

  next();
}


module.exports = deleteEntertainmentCodePost;