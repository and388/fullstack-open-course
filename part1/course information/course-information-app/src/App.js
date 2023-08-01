
const Header =  (props) => {
  return(
  <h1>{props.course}</h1>
)}

const Content = (props) => {
  const parts= props.parts.map(part => (<Part part={part.name} exercises={part.exercises}/>))
console.log(props)
  return (
  <>
  {parts}
  </>)
}
 
const Part = (props) => {return (<p>{props.name}{props.exercises}</p>)}

const Total = (props) => { 
  const total = props.parts.map(part => part.exercises)
  console.log(total)
  var totalt = 0
  for(let i=0;i<total.length;i++){ totalt+=total[i];
    
  }
  return (<h1>{totalt}</h1>)}

const App = () => {

   const course = {
   name: "half Stack application development",
     parts : [
    {
  name : 'Fundamentals of React',
   exercises : 10
  },
  {
    name :'Using props to pass data',
  exercises : 7
},
{
   name : 'State of a component',
  exercises : 14}]}

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
        
    </div>
  );
}

export default App;

