import React, { useState } from 'react'

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const [votes, getVotes] = useState(
    Array(anecdotes.length).fill(0)
  )

  const [mostvoted, setMostVoted] = useState(0);
  for (let variant = 0; variant < anecdotes.length; variant++) {
    if (votes[variant] > votes[mostvoted]) {
      setMostVoted(variant);
      break;
    }
  }

  return (
    <div>
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <button onClick = {() => {let array = [...votes]; array[selected] += 1; getVotes(array);}}> Vote </button>
      <button onClick = {() => setSelected(getRandomArbitrary(0, anecdotes.length - 1))}> Next anecdote </button>
    </div>
    <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[mostvoted]}</p>
        <p>has {votes[mostvoted]} votes</p>
    </div>
    </div>
  )
}

export default App