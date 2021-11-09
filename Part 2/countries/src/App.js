import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [countries, setCountries] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
   const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
         .then(response => {
           setCountries(response.data)});
  }, []);
  
  
 function handleChange(event) {
  setQuery(event.target.value);
  let searchResult = countries.filter(element => element.name.common.match(query) || element.name.official.match(query));
  setSearchResults(searchResult);
 };
 

  return (
    <div>
      <h1>Countries!</h1>
      <Search setter={setSearchResults} query={query} handleChange = {handleChange} setQuery={setQuery} countries={countries}/>
      <Countries searchResults={searchResults} handleChange = {handleChange} setQuery={setQuery}/>
    </div>
  );
}

function Search({countries, query, setQuery, handleChange, setter}) {
 
  return(
    <div>
      <form>
          <p>Find a country</p>
          <input onChange={handleChange} value={query}/>
      </form>
    </div>
  )
}

function Countries({searchResults, handleChange, setQuery}) {

 if (searchResults.length > 1 && searchResults.length < 10) {
  return(
   <div>
    <h1>Display</h1>
    {searchResults.map(country => <CountryNames country = {country} handleChange={handleChange} setQuery={setQuery}/>)}
   </div>
  )
 } else if (searchResults.length == 1) {
  return(
   <Country country={searchResults[0]} />
  )
 }

 return(
  <div>
   <h1>Display</h1>
   <p>No countries to show</p>
  </div>
 )
 
}

function CountryNames({country, handleChange, setQuery}) {
 return(
  <ul>
  <li>  
  <div>
   <p>{country.name.common} </p>
   <button onClick={handleChange}>Show</button>
  </div>
  </li>
  </ul>
 )
}


function Country({country}) {

console.log( country)
 return(
  <div>
   <div className="name">
    <h1>{country.name.common}</h1>
    <p>{country.name.official}</p>
   </div>
   <div>
    <p> Capital: {country.capital} </p>
    <p> Population: {country.population} </p>
   </div>
   <div className="languages"> 
    <h2>Languages</h2>
    <Languages languages={country.languages}/>
   </div>
   <div className="symbols"/>
    <img src={country.flags.png} alt="Flag"/>
   <Weather capital={country.capital}/>
  </div>
 )
}

function Languages({languages}) {

 let list = Object.keys(languages)
                  .map(element => <li>{languages[element]}</li>)
                  

 return(
  <ul>
   {list}
  </ul>
 )
}

function Weather({capital}) {

 const [weather, setWeather] = useState({});
 
 const api_key = process.env.REACT_APP_WEATHER;
 
 useEffect(() => {
  axios.get(
   `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`
  ).then(
   response => {
   setWeather(response.data)
   }
  )
 }, [api_key]);
 
 
 if (Object.keys(weather).length !== 0) {
 
 console.log(weather)
 return(
  <div>
   <h2>Weather in {capital}</h2>
   <div>
    <p>Temperature: {weather.current.temperature}</p>
    <img src={weather.current.weather_icons} alt={weather.current.weather_description}/>
   </div>
  </div>
 )} 
 
 return(
  <div>
   <h2>Weather in {capital}</h2>
  </div>
 )
}

export default App;
