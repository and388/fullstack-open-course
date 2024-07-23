import blogService from '../services/blogs'

const Blog = ({ blog }) => {

 const handleDeleteButton = (id) => {
  blogService.deleteBlog(id)

 }
      
  return (
  <div>
    {blog.title} author: {blog.author}
    <input type='button' onClick={() => handleDeleteButton(blog.id)} value='delete'></input>
  </div>  )
}

export default Blog