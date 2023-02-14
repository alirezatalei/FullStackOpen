import { useEffect, useState } from "react"
import { getWeather } from "./services/countries"

export default function Country({ country }) {

	const [weather, setWeather] = useState()

	useEffect(() => {
		getWeather(country.latlng[0], country.latlng[1])
			.then(console.log)
			.catch(console.log)
	}, [])

	return (
		<div>
			<h1>{country.name.common}</h1>
			<div>Capital: {country.capital}</div>
			<div>Area: {country.area}</div>
			<h3>Languages:</h3>
			<ul>
				{Object.entries(country.languages).map(([key, value]) => <li>{value}</li>)}
			</ul>
			<div >
				<img width={200} src={country.flags.svg} />
			</div>
			<h2>Weather in {country.capital} </h2>
			<div>temperature: </div>
			<div>

			</div>
			<div>wind: </div>
		</div>
	)
}