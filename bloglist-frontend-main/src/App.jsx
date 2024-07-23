import { useState, useEffect } from 'react'
import Blogs from './components/Blogs'
import LoginForm from './components/LoginForm'
import AddBlog from './components/AddBlog'

import blogService from './services/blogs'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user , setUser] = useState(null)

  const updateBlogs = () => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs ),
    )  
  }

  if(user !== null ) {
    console.log(user,'this is the user')
  return (<div>
         <p>{user.username}</p>
         <button onClick={()=>{setUser(null)}}>logout</button>
         <Blogs blogs ={blogs} token={user} />
         <AddBlog  user={user} setBlogs={setBlogs} blogs={blogs} />
        </div>
  )
}else {
  return (
    <LoginForm setUser={setUser} updateBlogs={updateBlogs}/>
  )
  
}


}

export default App