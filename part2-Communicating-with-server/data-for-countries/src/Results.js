export default function Results({ results, onSelectCountry }) {
	return <div style={{ marginTop: '16px' }}>{results.map(country => <>
		<div style={{ display: 'flex', marginTop: '8px' }}>
			<div style={{ marginRight: '8px' }}>{country.name.common}</div>
			<button onClick={() => onSelectCountry(country)}>show</button>
		</div></>)}</div>
}