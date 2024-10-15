const Notification = (props) => {
    const style = {backgroundColor:props.color, color:'white',transition:'ease-in-out', borderRadius:'15px',textAlign:'center',padding:'10px',width:'500px', position:'fixed',zIndex:'10'}
    return (<p style={style}>{props.notification}</p>)
}

export default Notification