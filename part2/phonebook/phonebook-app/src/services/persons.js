import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
   return axios.get(baseUrl)
    
}
const deletePerson = (id) => {
   return axios.delete(`${baseUrl}/${id}`)
}

const createPerson = (newPerson) => {
   return axios.post(baseUrl,newPerson)
}

const updatePerson = (id, newperson) => {
   return axios.put(`${baseUrl}/${id}`, newperson)
}



export default {getAll, deletePerson, createPerson, updatePerson}