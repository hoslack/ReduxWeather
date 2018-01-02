import axios from 'axios';
const API_KEY = '52d37ae9f7a6251a46e0a86a91015f51';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = city => {
	const url = `${ROOT_URL}&q=${city}`;
	const request = axios.get(url);
	console.log(request);
	return {
		type: FETCH_WEATHER,
		payload: request,
	};
};
