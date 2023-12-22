const express = require("express")
const cors = require("cors")
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

const genId = () => {
    maxId = Math.max(...contacts.map( ctt => ctt.id))
    return maxId + 1

}

app.get( "/" , ( request, response) => {
    response.send("<h1>hello world</h1>")
})

app.get("/api/contacts", (request, response ) => {
    response.json(contacts)
})

app.post("/api/contacts", (request, response) => {
    if(!request.body) {return response.status(400).end()}
    const note = {...request.body, id: genId()}
    contacts.push(note)
    
    response.json(note)
   
})

app.get("/api/contacts/:id", (request, response) => {
    const id = Number(request.params.id);
    const note = contacts.find( ctt => ctt.id === id)
    if(!note) { return response.status("404").end()}

    response.json(note)
})

app.delete('/api/contacts/:id', (request, response) => {
  id = request.params.id
  if(!id) {return response.status("200").end()}
  contactsNow = contacts.filter(n => n.id !== id)
  if(contacts.length !== contactsNow.length) {
    contacts = contactsNow
    return response.status("200").end()
  }
  response.status("200").end()
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
