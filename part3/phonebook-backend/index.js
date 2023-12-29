require('dotenv').config()
const express = require("express")
const cors = require("cors")
const Contact = require('./models/contact')
const app = express()
app.use(cors())
app.use(express.json())

app.use(express.static('build'))

let contacts = [
        {
          name: "andre ",
          number: "3391091105",
          id: 5
        },
        {
          name: "Andre2",
          number: "13245333",
          id: 6
        },
        {
          name: "snftrer",
          number: "54979",
          id: 10
        },
        {
          name: "thiago",
          number: "5464897",
          id: 11
        },
        {
          name: "André Carvgalho gfGgomdf",
          number: "3391091005",
          id: 12
        }
      ]


app.get( "/" , ( request, response) => {
    response.send("<h1>hello world</h1>")
})

app.get("/api/contacts", (request, response ) => {
    Contact.find({}).then(contacts => response.json(contacts))
})

app.post("/api/contacts", (request, response) => {
    if(!request.body) {return response.status(400).end()}
    const contact = new Contact ({...request.body})
     contact.save()
     .then( contactSaved => { console.log(contactSaved), response.json(contactSaved)})
     .catch(error => response.status(500).end())    
    
   
})

app.get("/api/contacts/:id", (request, response) => {
    const id = request.params.id;
     Contact.findById({_id:id}).then(contact => response.json(contact)).catch( error => {response.status(404).send({error:error})})
})

app.delete('/api/contacts/:id', (request, response) => {
  id = request.params.id
   Contact.deleteOne({_id:id}).then(deleted => response.send("<deleted>")).catch(response.status('500').end)
})

app.put("/api/contacts/:id", (request, response) => {
  id = request.params.id
  const person = request.body
  contactsUpdated = contacts.map( ctt = ctt.id === id? person : ctt)
  response.json(person)
})

const PORT = process.env.PORT || 3001

app.listen(PORT)
 console.log(` the back-end is running on PORT ${PORT}`)
