const canDeleteAccount = (reqUser, requestedUserId)=>{   
  
   return ( reqUser.role === `ceo` || requestedUserId === reqUser.id )
  
}

module.exports = canDeleteAccount;