import { useState, useEffect, useRef } from 'react'
import Blogs from './components/Blogs'
import LoginForm from './components/LoginForm'
import AddBlog from './components/AddBlog'
import Notification from './components/Notification'

import blogService from './services/blogs'
import Togglable from './components/Togglable'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user , setUser] = useState(null)
  const [notification, setNotification] = useState(null)

  const updateBlogs = () => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
   
  }
  const blogFormRef = useRef()
  useEffect(() => {
    if( window.localStorage.getItem('user')) { 
      var userFromStorage = JSON.parse(window.localStorage.getItem('user'))
      setUser(userFromStorage)
       blogService.setToken(userFromStorage.token)
      updateBlogs()
     }}
  ,[])

  const deleteBlog= (id) => {
        var newBlogs = blogs.filter((blog) => blog.id !== id )
        setBlogs(newBlogs)
  }

  const updateBlogState = (newBlog) => {
    var newBlogState = blogs.map( blog => blog.id === newBlog.id? newBlog:blog)
    console.log('this is the new blog from blog component ',newBlog)
   // console.log(blogs,newBlogState)
  }

  if(notification) {
    setTimeout(() => { setNotification(null)}, 5000)
  }
  

  return(
  <div>
    <Togglable buttonLabel='Abrir painel de Login' ref={blogFormRef}>
      <LoginForm setUser={setUser} updateBlogs={updateBlogs} notification = { setNotification}/>
    </Togglable> 
 <div>
    <button onClick={()=>{setUser(null), window.localStorage.removeItem('user')}}>logout</button>
    <Blogs blogs ={blogs} token={user} deleteBlog={deleteBlog} updateBlogState ={updateBlogState} />
    <Togglable  buttonLabel='new Blog' ref={blogFormRef}>
    <AddBlog  user={user} setUser={setUser} setBlogs={setBlogs} blogs={blogs} notification = {setNotification}/>
    </Togglable>
   </div>
  </div>)


}

export default App