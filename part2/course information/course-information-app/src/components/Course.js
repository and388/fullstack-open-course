
const Header = ({title}) => <h2>{title}</h2>

const Sum = ({parts}) => {
    const exercises = parts.map(part => part.exercises)
    return (
        <h4>total of {exercises.reduce((acumulator, currentValue) => acumulator + currentValue)} exercises</h4>
    )}

const Part = ({parts}) => parts.map(part => <p key={part.id}>{part.name}{part.exercises}<br/></p>)

const Course = ({course}) => {
    return (
        <>
        <Header title={course.name} />
        <Part parts={course.parts}/>
        <Sum parts={course.parts} />
        </>
)}

export default Course;