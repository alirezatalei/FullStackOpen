import { useState } from 'react'


const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    { quote: 'If it hurts, do it more often.', vote: 0 },
    { quote: 'Adding manpower to a late software project makes it later!', vote: 0 },
    { quote: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', vote: 0 },
    { quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', vote: 0 },
    { quote: 'Premature optimization is the root of all evil.', vote: 0 },
    { quote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', vote: 0 },
    { quote: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', vote: 0 },
    { quote: 'The only way to go fast, is to go well.', vote: 0 }
  ])

  const [selected, setSelected] = useState(0);
  const onNextAnecdote = () => selected < 7 ? setSelected(prev => ++prev) : setSelected(0)

  const voteAnecdote = () => {
    setAnecdotes(prev => [...prev, { ...prev[selected, prev[selected].vote = ++prev[selected].vote] }])
  };

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <div>
          {anecdotes[selected].quote}
        </div>
        <div>
          has {anecdotes[selected].vote} votes
        </div>
      </div>
      <button onClick={() => voteAnecdote()}>vote</button>
      <button onClick={() => onNextAnecdote()}>next anecdote</button>
      <div>
        <h1>
          Acedote with most vote
        </h1>
        <div>
          <div>{anecdotes.filter(anecdote => anecdote.vote === Math.max(...anecdotes.map(x => x.vote)))[0].quote}</div>
        </div>
      </div>
    </div>
  )
}

export default App