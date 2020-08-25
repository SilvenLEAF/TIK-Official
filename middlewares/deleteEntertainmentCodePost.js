const canDeleteEntertainmentCodePost = require('../permissions/canDeleteEntertainmentCodePost');


const deleteEntertainmentCodePost = (req, res, next) =>{

  if(!canDeleteEntertainmentCodePost(req.user))     
    return res.status(401).json({ msg: `Not allowed.` });

  next();
}


module.exports = deleteEntertainmentCodePost;