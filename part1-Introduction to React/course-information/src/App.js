const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [{
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    }
      , {
      name: 'State of a component',
      exercises: 14
    }]
  }


  const Header = ({ courseName }) => {
    return <div>{courseName}</div>
  }
  const Content = ({ parts }) => {
    return parts.map((x, index) => <p key={index}>{x.name} {x.exercises}</p>)
  }
  const Total = ({ parts }) => {
    const totalNumber = parts.map(x => x.exercises).reduce((partialSum, a) => partialSum + a, 0)
    return <p>Number of exercises {totalNumber}</p>
  }

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App