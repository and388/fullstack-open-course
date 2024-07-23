import axios from 'axios'

const baseUrl = '/api/login'

const login = async(user) => {
   var user = await axios.post(baseUrl, user)
  return user.data
  
}

export default login