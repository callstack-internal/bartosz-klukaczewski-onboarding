import React from 'react';

import GenericListItem from 'app/components/GenericListItem';
import {types} from 'app/constants';
import {Weather} from 'app/constants/types';

const weatherDetailRows: {
  label: string;
  valueKey: keyof Weather;
  unit: string;
}[] = [
  {label: 'Humidity', valueKey: 'humidity', unit: '%'},
  {label: 'Pressure', valueKey: 'pressure', unit: ' hPa'},
  {label: 'Wind speed', valueKey: 'windSpeed', unit: ' km/h'},
  {label: 'Cloud coverage', valueKey: 'cloudCoverage', unit: '%'},
];

interface Props {
  weather: types.Weather;
}

const WeatherData = ({weather}: Props) => (
  <>
    {weatherDetailRows.map(({label, valueKey, unit}) => (
      <GenericListItem
        key={valueKey}
        label={label}
        value={`${weather[valueKey]}${unit}`}
      />
    ))}
  </>
);

export default React.memo(WeatherData);
