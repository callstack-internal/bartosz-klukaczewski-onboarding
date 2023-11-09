import {types} from 'app/constants';
import {normalizeOpenWeatherData} from 'app/services/weatherService';
import {weather} from 'app/utils/testUtils';

describe('WeatherService', () => {
  it('should properly convert OpenWeather API objects', () => {
    const openWeatherData = {
      id: '1',
      name: 'Gdansk',
      weather: [
        {
          main: 'Clear',
          icon: '01d',
        },
      ],
      main: {
        temp: 21,
        humidity: 60,
        pressure: 1012,
      },
      wind: {
        speed: 3.2,
      },
      clouds: {
        all: 6,
      },
    } as unknown as types.OpenWeatherWeather;
    const convertedData = normalizeOpenWeatherData(openWeatherData);
    expect(convertedData).toStrictEqual(weather);
  });
});
