const canDeleteProfile = (authUser, requestedUserId)=>{   
  
   return ( authUser.role === `ceo` || requestedUserId == authUser.id )
  
}

module.exports = canDeleteProfile;