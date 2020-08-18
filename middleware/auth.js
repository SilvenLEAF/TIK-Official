const jwt = require('jsonwebtoken');




const auth = (req, res, next) =>{
  try {
    const token = req.header('x-auth-token');

    // 1) if there is no token
    if(!token) return res.status(401).json({ msg: `No authentication token, authorization denied.` });

    // 2) if there is a token then verify it
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if(!verified) return res.status(401).json({ msg: `Token verification failed, authorization denied.` });

    req.user = verified.id;
    next();
  } catch (err) {
    next(err,req,res)
  }
}



module.exports = auth;