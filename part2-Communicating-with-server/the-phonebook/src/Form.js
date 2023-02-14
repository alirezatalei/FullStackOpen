import { useState } from "react"

export default function Form({ onFormSubmit, onFormChange, name, number }) {
	return <form onSubmit={onFormSubmit}>
		<h3>Add a new</h3>
		<div>
			name: <input value={name} onChange={e => onFormChange({ type: 'name', value: e.target.value })} />
		</div>
		<div>
			number: <input value={number} type={'number'} onChange={e => onFormChange({ type: 'number', value: e.target.value })} />
		</div>
		<div style={{ marginTop: '16px' }}>
			<button type="submit">add</button>
		</div>
	</ form>

}