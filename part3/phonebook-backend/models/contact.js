require('dotenv').config
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI
console.log(url)

mongoose.set('strictQuery',false)

mongoose.connect(url)

const contactSchema = new mongoose.Schema({
    name:String,
    number:String
})

contactSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject._v
    }
})

module.exports = mongoose.model('Contact',contactSchema)