import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {theme} from 'app/styles';

const icons: Record<string, string> = {
  '01d': 'weather-sunny',
  '01n': 'weather-night',
  '02d': 'weather-partly-cloudy',
  '02n': 'weather-night-partly-cloudy',
  '03d': 'weather-cloudy',
  '03n': 'weather-cloudy',
  '04d': 'weather-cloudy',
  '04n': 'weather-cloudy',
  '09d': 'weather-rainy',
  '09n': 'weather-rainy',
  '10d': 'weather-pouring',
  '10n': 'weather-pouring',
  '11d': 'weather-lightning',
  '11n': 'weather-lightning',
  '13d': 'weather-snowy',
  '13n': 'weather-snowy',
  '50d': 'weather-fog',
  '50n': 'weather-fog',
};

interface Props {
  icon: string;
}

export const WeatherIcon = ({icon}: Props) => (
  <Icon name={icons[icon]} size={36} color={theme.colors.icon} />
);

export default React.memo(WeatherIcon);
