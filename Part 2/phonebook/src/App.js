import {useState, useEffect} from 'react';
import axios from 'axios';
import comms from './Communication.js'

function App() {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [shownPersons, setShownPersons] = useState([]);

  useEffect(() => {
    comms.get()
         .then(persons => {
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


      let contact = {
        name: name,
        number: number
      }


    if (persons.find(element => element.name.match(name))) {
     if (window.confirm("Would you like to replace the number?")) {

      let id = [...persons].filter(element => element.name.match(name))
      id = id[0].id
      comms.update(id, contact)
      let newpersons = [...persons].filter(element => !element.name.match(name)).concat(contact).sort(element => element.name);
      setPersons(newpersons)
     }
    } else {
      let newpersons = [...persons].concat(contact)
      setPersons(newpersons);

      comms.add(contact)
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
  <div>
    <p>{person.name}: {person.number}</p>
    <Delete id={person.id}/>
   </div>
  )
}

function Delete(id) {

 function destroy()
 {
 if (window.confirm("Are you sure you want to delete this contact?")) {
   return comms.delete(id)
 }
 }

 return (
  <button onClick={destroy}>Delete</button>
 )

}


export default App;
