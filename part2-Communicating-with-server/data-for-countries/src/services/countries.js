import axios from 'axios'
const baseUrl = 'https://restcountries.com/v3.1'
const baseWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?'
const apiKey = process.env.REACT_APP_API_KEY

const getAll = () => {
	const request = axios.get(`${baseUrl}/all`)
	return request.then(response => response.data)
};

const findCountry = (name) => {
	const request = axios.get(`${baseUrl}/name/${name}`)
	return request.then(response => response.data)
}

const getWeather = (lat, lon) => {
	const request = axios.get(`${baseWeatherUrl}lat=${lat}&lon=${lon}&appid=${apiKey}`)
	return request.then(response => response.data)
};


export {
	getAll,
	findCountry,
	getWeather
}