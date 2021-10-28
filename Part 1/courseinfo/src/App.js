import React from 'react'
function App() {

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
     <Header course={course}/>
     <Content list={parts}/>
     <Total list={parts}/>
    </div>
  )
}


function Header(props) {
    return(
     <div>
     <h1> {props.course} </h1>
     </div>
    )
}

function Content(props) {
    return (
     <div>
        {props.list.map(element => <Part name={element.name} exercises={element.exercises}/>)}
     </div>
    )
}

function Part(props) {
    return(
        <div>
        <p>{props.name}:{props.exercises} </p>
        </div>
    )
}

function Total(props) {
    return (
     <div>
        <p>Number of exercises: {props.list.map(element => element.exercises).reduce((a, b) => a + b)}</p>
     </div>
    )
}



export default App;
