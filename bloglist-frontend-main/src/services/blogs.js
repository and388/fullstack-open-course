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

 try {var saved = await axios.post(baseUrl,blog,config)
  if(saved.status !== 204)
       {  return saved.data}}
 catch(e) { token=null, window.localStorage.removeItem('user')
  console.log('tentativa de usar token mal sucedida')
 }
return null

}

const deleteBlog = async(id) => {
  var bearertoken = `Bearer ${token}`
  var idRetornado =''
  var config = {
    headers: { authorization: token }
  }
  var response = await axios.delete(`${baseUrl}/${id}`,config)
 if(response.status===204) { idRetornado=id}
 return idRetornado
}

const setToken = (tokenSetado) => {
token=tokenSetado
}

const updateBlog = async (blog) => { 
 const url = `${baseUrl}/${blog.id}`
     var newBlog = {...blog,likes:blog.likes+1}
console.log(blog,newBlog)
  var response = await axios.put(url,newBlog)
  return response.data

}

export default { getAll,createBlog,setToken, deleteBlog, updateBlog}