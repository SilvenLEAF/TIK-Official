const mongoose = require('mongoose');



// Creating ShowcaseCodeSchema
const ShowcaseCodeSchema = new mongoose.Schema({
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




// Creating ShowcaseCode model
module.exports = ShowcaseCode = mongoose.model('showcaseCode', ShowcaseCodeSchema);