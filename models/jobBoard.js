const mongoose = require('mongoose')

const jobBoardSchema = new mongoose.Schema({
  jobBoard: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  }
})

module.exports = mongoose.model('jobBoard', jobBoardSchema)
