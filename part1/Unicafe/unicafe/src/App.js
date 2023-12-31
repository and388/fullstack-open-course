
import React from 'react'

const Statistics = ({good,neutral,bad}) => {
  const all = good + neutral + bad
  const positive = Math.floor((good*100) / all)
  const average = ((good * 1) + (neutral * 0) + (bad * -1))/all
 if(all>0) {
  return (
  <>
  <table>
    <tbody>
   <StatisticLine text="Good" value={good} />

   <StatisticLine text="Neutral" value={neutral}/>
   
   <StatisticLine text="Bad" value={bad} />

   <StatisticLine text="Average" value={average} />

   <StatisticLine text="Positive" value={positive} />
   </tbody>
   </table>
      </>)} 
      return (<p>No feedback given yet</p>)

}

const StatisticLine = (props) => {
  return (
    <>
    <tr>
      <td>{props.text}</td>
    <td>{props.value}{props.text==="Positive"?"%":""}</td> 
      </tr></>
  )
}

const App= () => {
  const [good, setGood] = React.useState(0)
  const [neutral, setNeutral] = React.useState(0)
  const [bad, setBad] = React.useState(0)

  const avaliationHandler = (avaliation) => {
    if(avaliation===1){ setGood(good + 1)} else if( avaliation ===0){setNeutral(neutral + 1)} else{setBad(bad + 1)}
  }
  return (
    <div >
      <h2>Give feedback</h2>
      <Button funcao={ () => avaliationHandler(1)} titulo="Good" />
      <Button funcao={ () => avaliationHandler(0)} titulo="Neutral" />
      <Button funcao={ () => avaliationHandler(-1)} titulo="Bad" />
     
        
            <h2>Statistics</h2>
          
          <Statistics good={good} neutral={neutral} bad={bad}/>
          
    
    </div>
  );
}

const Button = ({funcao, titulo}) =><button onClick={funcao}>{titulo}</button> 
export default App;