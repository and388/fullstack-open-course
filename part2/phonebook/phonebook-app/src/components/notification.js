import React from 'react'

const Notification = ({message, setErrorMessage, color}) => {
    const style = {
        background: 'rgb(255, 250, 237)',
        borderColor: color,
        color: color
 }
  
  console.log(message, setErrorMessage, color)


    React.useEffect ( () => { 
        const id = setTimeout( 
            () => {setErrorMessage({status:'', color: 'red'})},
            "5000"
        )
        return () => clearTimeout(id)
    }, [message])
    
    if (message!== '') {
        return (
            <div className = 'notification' style = {style}>
                {message}
            </div>
            
        ); 
    }
    return null
}

export default Notification;