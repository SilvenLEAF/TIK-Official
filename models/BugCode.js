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
  solved: {
    type: Boolean,
    default: false
  },
  ownerName: {
    type: String,
    required: true
  },
  ownerId: {
    type: String,
    required: true
  },
  createdAt: String
})




// Creating BugCode model
module.exports = BugCode = mongoose.model('bugcode', BugCodeSchema);



