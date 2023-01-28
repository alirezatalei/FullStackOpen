const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const contents = [{ part: part1, exercise: exercises1 },
  { part: part2, exercise: exercises2 },
  { part: part3, exercise: exercises3 }]

  const Header = ({ courseName }) => {
    return <div>{courseName}</div>
  }
  const Content = ({ contents }) => {
    return contents.map((x, index) => <p key={index}>{x.part} {x.exercise}</p>)
  }
  const Total = ({ totalNumber }) => {
    return <p>Number of exercises {totalNumber}</p>
  }

  return (
    <div>
      <Header courseName={course} />
      <Content contents={contents} />
      <Total totalNumber={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App