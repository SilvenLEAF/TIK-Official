const mongoose = require('mongoose');



// Creating EntertainmentCodeSchema
const EntertainmentCodeSchema = new mongoose.Schema({
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




// Creating EntertainmentCode model
module.exports = EntertainmentCode = mongoose.model('Entertainmentcode', EntertainmentCodeSchema);