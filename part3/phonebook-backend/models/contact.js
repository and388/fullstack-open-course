require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

mongoose.set('strictQuery', false)

mongoose.connect(url)

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: [true, 'name is required']
  },
  number: {
    type: String,
    minLength: 8,
    required: [true, 'phone number is required'],
    validate: {
      validator: function (v) {
        return /\d{2,3}-\d{1,3}/g.test(v)
      },
      message: props => `${props.value} is not a valid phone number`
    }

  }
})

contactSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject._v
  }
})

module.exports = mongoose.model('Contact', contactSchema)
