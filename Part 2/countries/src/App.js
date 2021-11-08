import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
         .then(response => {
           setCountries(response.data)});
  }, countries);


  return (
    <div>
      <h1>Countries!</h1>
      <Search />
    </div>
  );
}

function Search() {
  return(
    <div>
      <form>
        <field>
          <p>Find a country</p>
          <input/>
        </field>
      </form>
    </div>
  )
}


export default App;
