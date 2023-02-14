export default function Notifiation({ type, message }) {
	const color = type === 'success' ? 'green' : 'orange'
	const footerStyle = {
		color,
		fontStyle: 'italic',
		fontSize: 16,
		border: `1px solid ${color}`,
		display: 'flex',
		padding: '10px'
	}
	return (
		<div style={footerStyle}>
			<br />
			<em>{message}</em>
		</div>
	)

}