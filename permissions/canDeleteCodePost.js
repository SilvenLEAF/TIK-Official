const canDeleteCodePost = (reqUser, codeId)=>{   
  
  return ( reqUser.role === `ceo` || reqUser.role === `cto` || codeId === reqUser.id )
 
}

module.exports = canDeleteCodePost;