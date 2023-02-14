export default function Result({ filterCriteria, persons, onDelete }) {
	return <div style={{ marginTop: '24px' }}> {persons
		.filter(x => {
			if (filterCriteria)
				return x.name.toLowerCase().includes(filterCriteria) || x.number.includes(filterCriteria)
			else return persons
		})
		.map(x => <div key={x.id}><div>
			<p >{x.name} {x.number}</p> <button onClick={() => onDelete(x.id)}>delete</button>
		</div>
		</div>)
	}
	</div>
}