const canDeleteEntertainmentCodePost = (reqUser)=>{   
  
  return ( reqUser.role === `ceo` || reqUser.role === `cto` )

}

module.exports = canDeleteEntertainmentCodePost;