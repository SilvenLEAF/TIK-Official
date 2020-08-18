const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();



// firing express app
const app = express();
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client/build')));



// connecting to MongoDB
mongoose.connect(process.env.MONGODB_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}, (err)=>{
  if(err) throw err;
  console.log(`Connected to MongoDB`);
})



/* ---------------------------------
.             middlewares
--------------------------------- */
// ----------routes handling
app.use(require('./routes/authRoutes'));
app.use('/users', require('./routes/userRoutes'));
/* The catch-all handler. */
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});



// ----------errors handling
app.use((err, req, res, next)=>{
  console.log(err);
  return res.status(500).json({ error: err.message, msg: `Server Error!` });
})





// -----------------------------LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
});