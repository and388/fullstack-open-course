import axios from 'axios'
const baseUrl = '/api/contacts'

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