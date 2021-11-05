import React from 'react'
function App() {

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return courses.map(course => <Course course={course}/>)

}

function Course({course}) {
  return (
    <div>
     <Header course={course['name']}/>
     <Content parts={course.parts}/>
     <Total parts={course.parts}/>
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
        {props.parts.map(element => <Part name={element.name} exercises={element.exercises}/>)}
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
        <p>Number of exercises: {props.parts.map(element => element.exercises).reduce((a, b) => a + b)}</p>
     </div>
    )
}



export default App;
