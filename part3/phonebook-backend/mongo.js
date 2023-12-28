const url = "mongodb+srv://andrecarvalho388:and267154321@cluster0.mtaxws6.mongodb.net/phonebook?retryWrites=true&w=majority"
const mongoose = require('mongoose')
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

 const Contact = mongoose.model("Contact",contactSchema)

 const contact = new Contact({ name:"Andre CArvalho Gomes", number:"91091005"})

  contact.save().then(contact => console.log(contact,' is saved !'))