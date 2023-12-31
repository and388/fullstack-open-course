import {useState} from 'react';

const Button = (props) => {

 return (
  <button onClick={props.action} style={{margin:'5px'}}>
    {props.title}
  </button>
 )
}
const App = () => {
  const anecdotes = ['If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]
 
  const [selectedAnec,setSelectedAnec] = useState(0)
  const [votes,setVotes] = useState(anecdotes.map(() =>0))

  const vote = () => {
    let newvotes= [...votes]
    newvotes[selectedAnec]+=1
    setVotes(newvotes)
}
  
const MostVoted = () => {
  let mostVoted=0;
  let result=0;
for(let i=0; i<votes.length; i++) {
  if (mostVoted<votes[i]){mostVoted=votes[i]; result=i}
} return (<>
<h2>Anecdote with most votes</h2>
{anecdotes[result]} 
<br/>
has {mostVoted} votes</>)
}

const randomSelect = () => {setSelectedAnec(Math.floor(Math.random()*anecdotes.length))}
  return(
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selectedAnec]}
      <br/>
       has {votes[selectedAnec]}</p>
      <Button action={vote} title='vote'  />
      <Button action={randomSelect} title='next anecdote' />
      <br/>
      <MostVoted/>
      
      
    </div>
  )
}


export default App;
