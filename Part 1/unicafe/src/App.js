import {useState} from 'react'

function App() {

 const [good, incrementGood] = useState(0)
 const [neutral, incrementNeutral] = useState(0)
 const [bad, incrementBad] = useState(0)

 const all = good + neutral + bad;
 const average = (good - bad) / all;
 const positive = (good / all) * 100;

  return (
   <div>
   
    <h1>give feedback</h1>
    
    <div>
    
     <button onClick={() => incrementGood(good + 1)}> good </button>
     <button  onClick={() => incrementNeutral(neutral + 1)}> neutral </button>
     <button  onClick={() => incrementBad(bad + 1)}> bad </button>
     
     </div>
    <div>
    
     <h1> statistics </h1>
     <p> good {good} </p>
     <p> neutral {neutral} </p>
     <p> bad {bad} </p>

     <p>all {all}</p>
     <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
   </div>
  )
}


export default App;
