const mongoose = require('mongoose');



// Creating BugCodeSchema
const BugCodeSchema = new mongoose.Schema({
  title: {
    type: String,        
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String,    
  },
  ownerName: {
    type: String,
    required: true
  },
  ownerId: {
    type: String,
    required: true
  },
  createdAt: new Date()
})




// Creating BugCode model
module.exports = BugCode = mongoose.model('bugcode', BugCodeSchema);