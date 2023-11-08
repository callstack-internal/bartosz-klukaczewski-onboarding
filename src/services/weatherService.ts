import axios from 'axios';
import Config from 'react-native-config';

import {types} from 'app/constants';

const client = axios.create({
  baseURL: 'https://api.openweathermap.org/',
  headers: {
    'content-type': 'application/json',
  },
  timeout: 30000,
});

const OpenWeatherAPIKey = Config.OPEN_WEATHER_API_KEY;

const cities = [
  703448, // Kyiv, UA
  692194, // Sumy, UA
  756135, // Warsaw, PL
  3081368, // Wrocław, PL
  3067696, // Prague, CZ
  3077916, // České Budějovice, CZ
  2950159, // Berlin, DE
  2867714, // Munich, DE
  3247449, // Aachen, DE
  5815135, // Washington, US
  5128581, // New York City, US
];

const normalizeOpenWeatherData = (
  input: types.OpenWeatherWeather,
): types.Weather => ({
  locationName: input.name,
  weatherStatus: input.weather[0].main,
  temperature: input.main?.temp,
  temperatureUnit: '℃',
  pressure: input.main?.pressure,
  windSpeed: input.wind.speed,
  cloudCoverage: input.clouds.all,
  icon: '',
});

export const getWeatherList = async () => {
  const response = await client.get('data/2.5/group', {
    params: {
      id: cities.join(','),
      appid: OpenWeatherAPIKey,
      units: 'metric',
    },
  });
  if (response.data.list) {
    return response.data.list.map(normalizeOpenWeatherData) as types.Weather[];
  }
  throw new Error('API returned 200 but actually an error occurred');
};
