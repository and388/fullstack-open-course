import {useState, useEffect} from 'react'
import CountryInformation from './countryInformation'

const FindCountries = function({allCountries}) {

    const [findCamp, setFindCamp] = useState('')
    const [foundedElements, setFoundedElements] = useState([])
    const [showMore, setShowMore] = useState('')

    const handleChange = (e) => {
        let campo = e.target.value
        setFindCamp(campo) 
        var regex = new RegExp(findCamp,'i');
        var founded = allCountries.filter(country => country.name.common.search(regex) !== -1)
         setFoundedElements(founded)    }
    
    const show = (id) => { setShowMore(id)}



    return (
    <form className="App">
      <label htmlFor= 'research'>Find Countries</label>
      <input type='text' onChange={handleChange} autoComplete='off' value ={findCamp} id='reasearch'></input>
      <ul>
      {findCamp ==='' ? <h1>digite um pais para fazer a pesquisa</h1>:
      foundedElements.length > 10?<h1>muitos paises,especifique mais</h1> :
         foundedElements.length < 10?foundedElements.map(country => { 
            return <li key={country.cca2}>
                {country.name.common} 
                {foundedElements.length > 1 && <input type='button' onClick={() =>show(country.name.common)} value='Show'></input>}
                </li>}) :
                <h1>nada</h1>}
     </ul>
      
    {foundedElements.length === 1 && <CountryInformation country={foundedElements[0].name.common}/>}
    { showMore!== '' && <CountryInformation country={showMore}/>}

 </form>)
}

export default FindCountries