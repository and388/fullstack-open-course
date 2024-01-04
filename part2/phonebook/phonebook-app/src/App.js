import {useState, useEffect} from 'react'
import personService from './services/persons'
import Notification from './components/notification'

const ContactCreator = ({person,setPerson, setErrorMessage}) => {
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  
const handleSubmitForm = (event) => {
    event.preventDefault()
    const newObject = {name:newName, number:newPhone} 
    var found = false
    for( let i = 0; i < person.length; i++) {
      if( person[i].name === newObject.name) { if (window.confirm('this contact already exists .. update it?')) {
        found = true;
        personService.updatePerson(person[i].id, newObject)
          .then( response => {setPerson(person.map(element => element.id === person[i].id? response.data: element)); })
            .catch(e =>setErrorMessage({status:e.response.data.error, color:'red'}) )
      }
      }
        
    }
    if(!found) {
      personService.createPerson(newObject).then(response => {setPerson(person.concat(response.data)); setErrorMessage({status:`Added ${response.data.name}`, color:'green'})})
      .catch( error => setErrorMessage({status:error.response.data.error, color:'red'} ))
     }
   }

   const handleNameChange = (event) => {
        setNewName(event.target.value)
   }

   const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
   }

  return(
  <form onSubmit={handleSubmitForm}>
      <div className = 'divname'>
        <div> <label htmlFor="nameCamp">name:</label>
         <input className='namecamp' id="nameCamp" value={newName} onChange={handleNameChange}/></div>
       </div>
      <div className = 'divphone' >
        <div> <label htmlFor='phonecamp'>phone:</label>
         <input className = 'phonecamp' id='phonecamp' type="tel" value={newPhone} onChange={handlePhoneChange}/></div>  
        </div>
      <div id="button">
        <button  className='button' type="submit" >Adicionar</button>
        </div>
    </form>
       )
}


const Phonebooklist = ({person,deletePerson}) => {

  return  <div>
    <ul className='list'>{person.map((person) => 
        <li  className ='listItem' key={person.id}>
          <p>Name:{person.name} phone:{person.number}</p>
          <button onClick={()=>deletePerson(person.id)}>Delete</button>
          </li>)}
          </ul>
  </div>
}

const App = () => {
  
   const [person, setPerson] = useState([])
   const [errorMessage, setErrorMessage] = useState({status:'', color:'red'})

  const hook = () => {
   personService.getAll().then(response => setPerson(response.data))
  }

  useEffect(hook, [])

  const deletePerson = (id) => {
    personService.deletePerson(id).then(response => setPerson(person.filter(person => person.id !== id))).catch(e => {
      setErrorMessage({message: e.response.data.error, color:'red'})
    })

  }
  return (
    <div className='container'>
      <h2 className='title'>Phonebook</h2>
      <Notification message = {errorMessage.status}  setErrorMessage={setErrorMessage} color={errorMessage.color}/>
           <Phonesearch person={person}  />
        <br/>
        <br/>
      <ContactCreator person={person} setPerson={setPerson} setErrorMessage= {setErrorMessage}/>
     <Phonebooklist person={person} deletePerson={deletePerson}/>
    </div> 
  )
}

const Phonesearch = ({person}) => {
  console.log(person)
  const [searchCamp, setSearchCamp] = useState('')
  const [searchResultstate,setSearchResultstate] = useState('')

  const handleSearchChange = (event) => {
    const personSearch = person
    setSearchCamp(event.target.value)
    personSearch.forEach(element => {
      if(event.target.value!== ''){if(element.name.startsWith(event.target.value)) { setSearchResultstate(`name:${element.name} phone:${element.number}`)
    }else{setSearchResultstate('')}
    }}
      );
  }

     return <>
              <div id="searchDiv">
                   search:<input className='searchcamp' value={searchCamp} onChange={handleSearchChange} />
                </div>
              <div>
                {searchResultstate}
                </div>
           </>
}


export default App;
