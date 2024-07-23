import axios from 'axios'
const baseUrl = '/api/blogs'
var token = null

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createBlog = async(user,blog) => {
   var bearertoken =`Bearer ${token}`
   var config = {
    headers:{authorization:token }
  }

var saved = await axios.post(baseUrl,blog,config)
return saved.data

}

const deleteBlog = (id) => {
  var bearertoken = `Bearer ${token}`
  var config = {
    headers: { authorization: token }
  }
  axios.delete(`${baseUrl}/${id}`,config)
}

const setToken = (tokenSetado) => {
token=tokenSetado
}

export default { getAll,createBlog,setToken, deleteBlog}