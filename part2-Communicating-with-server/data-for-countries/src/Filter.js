export default function Filter({ onFilterChange }) {
	return (
		<div style={{ display: 'flex' }}>
			find countries:
			<input onChange={onFilterChange} />
		</div>
	)
}