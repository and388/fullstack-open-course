import Blog from '../components/Blog'

const Blogs = ({blogs, deleteBlog, updateBlogState}) => {


    return (
        <div style={{border:'3px solid blue', borderRadius:'10px',padding:'10px'}}>
        <h2>blogs</h2>
      {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} deleteBlog={deleteBlog}  updateBlogState={updateBlogState} />
        )}
      </div>  
    )
}

export default Blogs