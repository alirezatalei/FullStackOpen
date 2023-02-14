export default function Course({ courses }) {
	const Header = ({ courseName }) => {
		return <h2>{courseName}</h2>
	}
	const Content = ({ parts }) => {
		return parts.map((x, index) => <p key={index}>{x.name} {x.exercises}</p>)
	}
	const Total = ({ parts }) => {
		const totalNumber = parts.map(x => x.exercises).reduce((partialSum, a) => partialSum + a, 0)
		return <h3>Total of {totalNumber} exercises</h3>
	}
	return (
		<>
			<h1>Web development curriculum</h1>
			{courses.map(course => <div key={course.id}>
				<Header courseName={course.name} />
				<Content parts={course.parts} />
				<Total parts={course.parts} />
			</div>)}
		</>
	)
}