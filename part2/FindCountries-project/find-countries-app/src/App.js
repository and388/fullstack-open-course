import {useState, useEffect} from 'react'
import FindCountries from './components/findCountries'
import './App.css';

function App() {

  const [allCountries, setAllCountries] = useState([])



  const hook = () => {
    fetch('https://studies.cs.helsinki.fi/restcountries/api/all').then(response => response.json()).then(data => setAllCountries(data))
  }
 
 useEffect(()=> {
  hook()
 },[])
    

   
 
  return (
    <FindCountries allCountries={allCountries}/>
  );
}

export default App;
