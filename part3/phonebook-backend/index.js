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

app.get("/api/contacts", (request, response, next ) => {
    Contact.find({})
      .then(contacts => response.json(contacts))
      .catch(error => next(error))
})

app.post("/api/contacts", (request, response, next) => {
    if(!request.body) {return response.status(400).end()}
    const contact = new Contact ({...request.body})
     contact.save()
     .then( contactSaved => { console.log(contactSaved), response.json(contactSaved)})
     .catch(error =>next(error))    
    
   
})

app.get("/api/contacts/:id", (request, response, next) => {
    const id = request.params.id;
     Contact.findById({_id:id})
      .then(contact => response.json(contact))
      .catch( error => next(error))
})

app.delete('/api/contacts/:id', (request, response, next) => {
  id = request.params.id
   Contact.findByIdAndDelete(id)
   .then(deleted => response.status(204).end())
   .catch(error => next(error))
})

app.put("/api/contacts/:id", (request, response, next) => {
  id = request.params.id
  const contact = {
    name: request.body.name,
    number: request.body.number
  }
  
  Contact.findByIdAndUpdate(id, contact, {new:true})
   .then( updatedContact => response.json(updatedContact))
   .catch( error => next(error))
})

const unknownEndPoint = (request, response) => {
  response.status(404).send({error:"unknown EndPoint"})
}

const errorHandler = (error,request, response, next) => {
   console.log(error)

   if(error.name === 'castError') {
     return response.status(400).send({error:"malformated id"})
   }

   next(error)
}

app.use(errorHandler)
app.use(unknownEndPoint)

const PORT = process.env.PORT || 3001

app.listen(PORT)
 console.log(` the back-end is running on PORT ${PORT}`)
