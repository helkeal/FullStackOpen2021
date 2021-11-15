import React from 'react';

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
          <p>{props.name}: {props.exercises} </p>
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
  
export default Course;  