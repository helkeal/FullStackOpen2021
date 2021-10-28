import React from 'react'
function App() {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const list = [
      {name: part1,
       exercises: exercises1
      },

      {name: part2,
       exercises: exercises2
      },

      {name: part3,
       exercises: exercises3
      },
    ]

  return (
    <div>
     <Header course={course}/>
     <Content list={list}/>
     <Total list={list}/>
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
