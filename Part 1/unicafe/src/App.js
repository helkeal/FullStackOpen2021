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
      <Statistics points = {points}/>
    </div>
  )
}

function Statistics({points}) {

  let total = Object.values(points).reduce((a, b) => a + b);
  console.log(total);

  if (total == 0)  {
    return(
    <div>
      <h2>statistics</h2>
      <p>No elements to show</p>
    </div>
  )} 
  
  else {

    return(
      <div>
        <h2>statistics</h2>
        {Object.keys(points).map(element => <StatisticsLine text={element} point={points[element]}/>)}
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