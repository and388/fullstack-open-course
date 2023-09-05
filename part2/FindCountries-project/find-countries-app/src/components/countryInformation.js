import {useState, useEffect} from 'react'


const CountryInformation = (props) => {
    const [countryInfo, setCountryInf] = useState({name:'',latlng:[]})
    const [languages, setLanguages] = useState([])
    const [weather, setWeather] = useState(null)
    const [weatherArray, setWeatherArray] = useState(null)
    const url =`https://studies.cs.helsinki.fi/restcountries/api/name/${props.country}`

    const loadInfo = () => {
     fetch(url)
    .then(
      response => {return response.json()})
    .then(
      data => {
      setCountryInf(data)
      setLanguages(Object.keys(data.languages)) 
      loadWeather(data)
    }
)
     .catch(e => console.log('erro'))
  }

const loadWeather = (data) => {
  let latlongArray= data.latlng;

  const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${latlongArray[0]}&lon=${latlongArray[1]}&appid=42f3617f1c200cf8f1093e879ecd26c4`

      fetch(urlWeather)
      .then(
        response => response.json()
      )
      .then( data => {
        setWeather(data)
         setWeatherArray(data.weather)})
      .catch(e => console.log('erro',e))
}

useEffect(loadInfo,[props.country])
  
    return (
        <div>
    <p> Name: {countryInfo.name.common}</p>
    <p>Capital: {countryInfo.capital}</p>
    <p>area: {countryInfo.area} km<sup>2</sup></p>
    <h4>languages: </h4>{languages.map((language,i) => {return (<p key={i}>{countryInfo.languages[language]} </p>)})}
       
    <h3>flag:</h3>
    <p className='flag'>{countryInfo.flag}</p>
     <h3>Weather: </h3>
    {weather && <p>weather: {weatherArray[0].main}</p>}
    {weather && <p>weather: {weatherArray[0].description}</p>}
    { weatherArray && <img src={`https://openweathermap.org/img/wn/${weatherArray[0].icon}@2x.png`} />}
    </div>
    )
}

export default CountryInformation