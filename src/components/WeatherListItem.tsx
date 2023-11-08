import {createBox, createText} from '@shopify/restyle';
import React from 'react';
import {Image} from 'react-native';

import {types} from 'app/constants';
import {Theme} from 'app/styles';

const Box = createBox<Theme>();
const Text = createText<Theme>();

interface Props {
  locationWeather: types.Weather;
}

const WeatherListItem = ({
  locationWeather: {
    locationName,
    temperature,
    temperatureUnit,
    icon,
    weatherStatus,
  },
}: Props) => (
  <Box
    flex={1}
    backgroundColor="mainBackground"
    flexDirection="row"
    paddingVertical="xl"
    paddingHorizontal="m">
    <Box justifyContent="center" alignItems="center">
      {!!icon && <Image source={{uri: icon}} />}
    </Box>
    <Box>
      <Text variant="header">{locationName}</Text>
      <Text>{weatherStatus}</Text>
    </Box>
    <Box>
      <Box>
        <Text>{`${temperature} ${temperatureUnit}`}</Text>
      </Box>
    </Box>
    <Box>
      <Text>{'>'}</Text>
    </Box>
  </Box>
);

export default React.memo(WeatherListItem);
