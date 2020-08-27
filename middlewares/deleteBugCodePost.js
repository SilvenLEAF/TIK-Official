const canDeleteCodePost = require('../permissions/canDeleteCodePost');
const BugCode = require('../models/BugCode');


const deleteBugCodePost = async (req, res, next) =>{
  const { bugCodeId } = req.body; 
  const code = await BugCode.findById(bugCodeId);
  console.log(code)
  if(!canDeleteCodePost(req.user, code))     
    return res.status(401).json({ msg: `Not allowed.` });

  next();
}


module.exports = deleteBugCodePost;