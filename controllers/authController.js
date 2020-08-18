const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


/* ----------------------------------------
.               SIGN UP
---------------------------------------- */
module.exports.signup =  async (req, res, next)=>{
  try {
    let { email, password, passwordCheck, userName } = req.body;
    
    /* ----------------------------------------
    .               validation
    ---------------------------------------- */
    // 1) email, password, passwordCheck must be filled
    if(!email || !password || !passwordCheck) return res.status(400).json({msg: `Not all fields have been filled.` });
    // 2) password must be at least 6 characters long
    if(password.length < 6) return res.status(400).json({ msg: `Password must be a least 6 characters long.` });
    // 3) password and passwordCheck must match
    if(password !== passwordCheck) return res.status(400).json({ msg: `Enter the same password twice for validation.` });
    // 4) does the user already have an account ?
    const existingUser = await User.findOne({ email: email });
    if(existingUser) return res.status(400).json({ msg: `An account with this email already exists.` });
    // 5) if NO userName, set it to email
    if(!userName) userName = email;



    /* ----------------------------------------
    .             password hashing
    .             and user saving
    ---------------------------------------- */
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const savedUser = await User.create({
      email,
      password: hashedPassword,
      userName
    });

    res.json({
      userName: savedUser.userName,
      location: savedUser.location,
      developer: savedUser.developer,
      skills: savedUser.skills,
      about: savedUser.about,
      role: savedUser.role
    });

  } catch (err) {
    next(err, req, res)
  }
}











/* ----------------------------------------
.               LOG IN
---------------------------------------- */
module.exports.login = async (req, res, next)=>{
  try {
  const { email, password } = req.body;
 
  /* ----------------------------------------
  .               validation
  ---------------------------------------- */
  // 1) email and password must be filled
  if(!email || !password) return res.status(400).json({ msg: `Not all fields have been fields.` });
  // 2) does the user really have and account ?
  const user = await User.findOne({ email: email });
  if(!user) return res.status(400).json({ msg: `No account with this email has been registered.` });
  // 3) does the password match ?
  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch) return res.status(400).json({ msg: `Invalid Credentials.` });


  /* ----------------------------------------
  .               user validated
  .                now jwt time
  ---------------------------------------- */
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({
    token,
    user: {
      id: user._id,
      userName: user.userName,
      location: user.location,
      developer: user.developer,
      skills: user.skills,
      about: user.about,
      role: user.role
    }
  })
  
  } catch (err) {
    next(err, req, res);
  }
}












/* ----------------------------------------
.            TOKEN VERIFICATION
---------------------------------------- */
module.exports.verify_token = async (req, res, next)=>{
  try {
    const token = req.header('x-auth-token');

    // 1) if there is no token
    if(!token) return res.json(false);
    // 2) if there is a token then verify it
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if(!verified) return res.json(false);

    // does the user really on our database ?
    const user = await User.findById(verified.id);

    if(!user) return res.json(false);

    // ----------------------------DEFAULT
    return res.json(true);

  } catch (err) {
    next(err, req, res)
  }
}