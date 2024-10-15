import blogService from '../services/blogs'
import {useState} from 'react'

const Blog = ({ blog,deleteBlog, updateBlogState}) => {
const [visibleDetails,setVisibleDetails] = useState(null)
 const handleDeleteButton = async(id) => {
  var response = await blogService.deleteBlog(id)
  deleteBlog(response)

 }
 const style = {display:visibleDetails?'':'none',color:visibleDetails?'white':'black', backgroundColor:visibleDetails?'purple':'white'}

  const detailsButton = () => {setVisibleDetails(!visibleDetails)}

  const handleLike = async () =>  {
    var newBlog = await blogService.updateBlog(blog)
    updateBlogState(newBlog)
  }
      
  return (
  <div style ={{border:"2px solid black", borderRadius:'3px', padding:'5px', margin:'5px'}}>
    {blog.title}&nbsp;
    <button onClick={detailsButton}>{visibleDetails?'Ocultar':'Mostrar'}</button>
    <div style={style}>
     author: {blog.author} <br></br>
     url: {blog.url} <br></br>
     <button onClick={handleLike}>Like</button>
     <input type='button' onClick={() => handleDeleteButton(blog.id)} value='delete'></input>
     </div>

  </div>  )
}

export default Blog