export interface OpenWeatherWeather {
  id: number;
  name: string;
  cod: number;
  coord: {
    lat: number;
    lon: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    feels_like: number;
  };
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  dt: number;
  wind: {
    speed: number;
    deg: number;
  };
  rain: {
    '3h': number;
  };
  clouds: {
    all: number;
  };
}

export interface Weather {
  locationName: string;
  weatherStatus: string;
  temperature: number;
  temperatureUnit: string;
  pressure: number;
  windSpeed: number;
  cloudCoverage: number;
  icon: string;
}
