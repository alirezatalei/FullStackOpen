import { useState } from 'react'

const Button = ({ text, handler }) => {
  return (
    <button onClick={handler}>
      {text}
    </button>
  )
}

const StatisticLine = ({ value, percentage = false }) => {
  return (
    <tr>
      <td>{[Object.keys(value)]}</td>
      <td> {[Object.values(value)]} {percentage ? '%' : null}</td>
    </tr>)

}
const Statistics = ({ good, bad, neutral }) => {
  const total = good + neutral + bad
  const average = (good + (0 * neutral) + (-1 * bad)) / total
  const positive = good / total * 100

  return (
    total ?
      <>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine value={{ good }} />
            <StatisticLine value={{ neutral }} />
            <StatisticLine value={{ bad }} />
            <StatisticLine value={{ average }} />
            <StatisticLine value={{ positive }} percentage />
          </tbody>
        </table>
      </>
      : <div>No Feddback Given</div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onFeedBackSubmition = (handler) => {
    handler(prev => prev + 1)
  }

  return (
    <>
      <div>
        <h1>Give feedback</h1>
        <Button text="Good" handler={() => onFeedBackSubmition(setGood)} />
        <Button text="Neutral" handler={() => onFeedBackSubmition(setNeutral)} />
        <Button text="Bad" handler={() => onFeedBackSubmition(setBad)} />
      </div>
      <div style={{ marginTop: '24px' }}>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </>
  )
}


export default App;
