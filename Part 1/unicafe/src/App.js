import {useState} from 'react';

function App() {

  const [points, setPoints] = useState(
    {
      "good": 0,
      "neutral": 0,
      "bad": 0
    }
  )

  return(
    <div>
      <Buttons controller = {setPoints} points = {points}/>
      <Statistics points = {points}/>
    </div>
  )
}

function Buttons({controller, points}) {

  let properties = Object.keys(points);

  return(
    <div>
      <h1>give feedback</h1>
      {properties.map(element => <Button setter={controller}  key = {Math.random() * 10}points = {points} text = {element}/>)}
    </div>
  )
}

function Button({text, points, setter}) {

  function handleClick() {
      let object = {...points};
      object[text] = points[text] + 1;
      setter(object);
  }

  return (
      <button onClick = {handleClick}>{text}</button>
  )
}

function Statistics({points}) {

  let total = Object.values(points).reduce((a, b) => a + b);
  if (total === 0)  {
    return(
    <div>
      <h2>statistics</h2>
      <p>No feedback given</p>
    </div>
  )} 
  
  else {

    return(
      <div>
        <h2>statistics</h2>
        {Object.keys(points).map(element => <StatisticsLine key={Math.random() * 10}text={element} point={points[element]}/>)}
      </div>
    )


  }

}


function StatisticsLine({text, point}) {
  return(
    <div>
      <p>{text}: {point}</p>
    </div>
  )
}

export default App;