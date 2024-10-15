import blogsService from '../services/blogs'
import {useState} from 'react'

const AddBlog = ({user,setUser,setBlogs,blogs,notification}) => { 
    const [titleCamp,setTitleCamp] = useState('')
    const [authorCamp, setAuthorCamp] = useState('')
    const [urlCamp, setUrlCamp] = useState('')
   
 const submit = async(event) => {
    event.preventDefault()
    window.alert('submited')
    var blog={title:titleCamp, author:authorCamp, url:urlCamp,likes:0 }
    console.log(blog)
      var saved = await blogsService.createBlog(user,blog)
      console.log(saved,'this is the saved blog')
      if( saved !== null) {
        setBlogs(blogs.concat(saved))
         notification({notification:'The Blog was sucessfully saved!!',color:'rgb(0,255,0)'})
        }else{
            notification({notification:'the blog was not saved, please log again!!',color:'rbg(255,20,20,0.5)'})
            setTimeout(() => {window.localStorage.removeItem('user'),setUser(null)}, 6000)
        }
    

 }

    return ( 
        <form onSubmit={submit}>
            <br/>
            <label htmlFor='title'>TITLE</label>
            <br/>
            <input type='text' value={titleCamp} onChange={({target}) => {setTitleCamp(target.value)}} id='title'></input>
            <br/>
            <label htmlFor='author'>AUTHOR</label>
            <br/>
            <input type='text' value={authorCamp} onChange={({target}) => { setAuthorCamp(target.value)}} id='author'></input>
            <br/>
            <label htmlFor='url'>URL</label>
            <br/>
            <input type='url' value={urlCamp} onChange = {({target}) => { setUrlCamp(target.value)}} id='url'></input>
            <br/>
            <button type='submit'>subir blog</button>
        
        </form>
    )

}

export default AddBlog
