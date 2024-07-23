import loginService from '../services/login'
import  {useState} from 'react'
import blogService from '../services/blogs'

const Login = ({setUser,updateBlogs}) => {
   
    const [userCamp, setUsercamp] = useState('')
    const [password, setPassword] = useState('')

    const Error = () => {
        return ( <h3>nothing</h3>)
    }
    const handleLogin = async(event) => {
        event.preventDefault()
        
        const user = {username:userCamp,password:password}
        try{
            var usuario =  await loginService(user)
            setUser(usuario)
             blogService.setToken(usuario.token)
             updateBlogs()
        
        }
        catch(e){
            
        }
        console.log('this is not null')
        
    }

    return (

      
        <div>
           {true && <Error/>}
            <form onSubmit={handleLogin}>
        <label htmlFor='user' >UserName</label>
        <br/>
        <input type='text'id='user' value={userCamp} onChange={ ({target}) => { setUsercamp(target.value)}}  placeholder='username' />
        <br/>
        <label htmlFor='password' >Password</label>
        <br/>
        <input type="password" id='password' onChange= {({target}) => {setPassword(target.value)}}value={password} placeholder='password' />
        <br/>
        <button type='submit'> LOGIN </button>
        </form>
       
        </div>
    )
}

export default Login