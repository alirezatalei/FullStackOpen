export default function Filter({ onChange }) {
	return <div style={{ marginTop: '24px' }}>
		Filter to shown data:
		<input onChange={onChange} name='filter' />
	</div>
}