const canDeleteCodePost = (reqUser, code)=>{   
  
  return ( reqUser.role === `ceo` || reqUser.role === `cto` || code.ownerId == reqUser._id )
 
}

module.exports = canDeleteCodePost;