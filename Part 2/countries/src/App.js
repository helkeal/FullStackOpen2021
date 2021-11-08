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

  return (
    <div>
      <h1>Countries!</h1>
      <Search setter={setSearchResults} query={query} setQuery={setQuery} countries={countries}/>
      <Countries searchResults={searchResults} setQuery={setQuery}/>
    </div>
  );
}

function Search({countries, query, setQuery, setter}) {
 
 function handleChange(event) {
  setQuery(event.target.value);
  let searchResult = countries.filter(element => element.name.common.match(query) || element.name.official.match(query));
  setter(searchResult)
 };
 
  return(
    <div>
      <form>
          <p>Find a country</p>
          <input onChange={handleChange} value={query}/>
      </form>
    </div>
  )
}

function Countries({searchResults, setQuery}) {

 if (searchResults.length > 1 && searchResults.length < 10) {
  return(
   <div>
    <h1>Display</h1>
    {searchResults.map(country => <CountryNames country = {country} setQuery={setQuery}/>)}
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

function CountryNames({country, setQuery}) {
 return(
  <ul>
  <li>  
  <div>
   <p>{country.name.common} </p>
   
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



export default App;
