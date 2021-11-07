import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [shownPersons, setShownPersons] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/persons")
         .then(persons => {
          console.log("Done!");
          setPersons(persons.data)
         }      
         )
  }, [])

  return (
    <div>
      <Filter persons={shownPersons} oldPersons={persons} setPersons={setShownPersons} />
      <PersonForm persons={persons} setPersons={setPersons} />
      <Display persons={persons} shown={shownPersons}/>
    </div>
  );
}


function Filter({persons, oldPersons, setPersons}) {

  const [value, handleValue] = useState("")

  function find(event) {
    handleValue(event.target.value);
    if (value.length >= 3) {
      setPersons(persons.filter(person => person.name.match(value) || person.number.match(value)))
    } else {
      setPersons(oldPersons);
    }
  }

  return(
    <div>
      <h1>Filter</h1>
      <input value={value} onChange={find}/>
    </div>
  )
}

function PersonForm({persons, setPersons}) {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("")

  function create(event) {
    event.preventDefault()

    if (persons.find(element => element.name.match(name))) {
      alert("This contact is already in the phonebook")
    } else {
      let contact = {
        name: name,
        number: number,
        id: persons.length + 1
      }

      let newpersons = [...persons, contact]
      setPersons(newpersons);
    }
  }

  return(
    <div>
      <h1>Add your contact</h1>
      <div>
        <form onSubmit={create}> 
        <fieldset>
         <label>
           <p>Name</p>
           <input value={name} onChange={(event) => setName(event.target.value)} />
         </label>
         <label>
           <p>Number</p>
           <input value={number} onChange={(event) => setNumber(event.target.value)} />
         </label>
        </fieldset>
        <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

function Display({persons, shown}) {
  if (persons.length > shown.length && shown.length == 0)
  {
    return(
    <div>
      <h1>Persons</h1>
      {persons.map(element => <Person key={element.id} person={element}/>)}
    </div>
  )} else {
    return(
    <div>
      <h1>Persons</h1>
      {shown.map(element => <Person key={element.id} person={element}/>)}
    </div>
    )
  }
}

function Person({person}) {
  return(
    <p>{person.name}: {person.number}</p>
  )
}


export default App;
