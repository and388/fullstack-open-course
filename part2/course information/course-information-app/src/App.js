
import Course from './components/Course'
const App = () => {

 
const course = {
  id:1,
  name:'Half stack application development',
  parts:[
    {
      name:'Fundamentals of React',
      exercises:10,
      id:1,
    },
    {
      name:'Using props to pass data',
      exercises:7,
      id:2,
    },
    {
      name:'State of components',
      exercises:14,
      id:3,
    },
  ]
}

const course2 = {
  id:2,
  name:'node.js',
  parts:[
    {
      name:'Routing',
      exercises:3,
      id:1,
    },
    {
      name:'Middlewares',
      exercises:7,
      id:2,
    },
  ]
}

 return (<>
      <h1>Web development Curriculum</h1>
     <Course course={course} />
     <Course course={course2} />
     </>
 )
}

export default App;

