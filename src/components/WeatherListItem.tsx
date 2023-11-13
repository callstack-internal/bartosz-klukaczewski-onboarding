import {createBox, createText} from '@shopify/restyle';
import React, {useCallback} from 'react';
import {TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {types} from 'app/constants';
import {Route, useNavigation} from 'app/navigation';
import {theme, Theme} from 'app/styles';

import WeatherIcon from './WeatherIcon';

const Box = createBox<Theme>();
const Text = createText<Theme>();

interface Props {
  weather: types.Weather;
  asButton?: boolean;
}

const WeatherListItem = ({weather, asButton}: Props) => {
  const {locationName, temperature, temperatureUnit, icon, weatherStatus} =
    weather;
  const navigation = useNavigation();

  const navigateToWeatherDetail = useCallback(
    () => navigation.navigate(Route.WeatherDetail, {weather}),
    [navigation, weather],
  );

  return (
    <TouchableHighlight
      testID={`WeatherListItemButton${locationName}`}
      disabled={!asButton}
      activeOpacity={0.9}
      underlayColor={theme.colors.mainBackgroundDarker}
      onPress={navigateToWeatherDetail}>
      <Box
        flex={1}
        backgroundColor="mainBackground"
        flexDirection="row"
        paddingVertical="l"
        paddingHorizontal="m"
        alignItems="center"
        borderBottomColor="divider"
        borderBottomWidth={1}>
        <Box justifyContent="center" alignItems="center" paddingEnd="m">
          <WeatherIcon icon={icon} />
        </Box>
        <Box flex={1}>
          <Text testID={`${locationName}Label`} variant="subtitle">
            {locationName}
          </Text>
          <Text variant="body">{weatherStatus}</Text>
        </Box>
        <Box>
          <Box
            borderRadius={40}
            paddingHorizontal="s"
            paddingVertical="xs"
            backgroundColor="cardPrimaryBackground">
            <Text
              color="cardPrimaryText"
              variant="header">{`${temperature} ${temperatureUnit}`}</Text>
          </Box>
        </Box>
        {asButton && (
          <Box justifyContent="center" alignItems="center" paddingStart="s">
            <Icon
              testID="WeatherListItemChevronRight"
              name="chevron-right"
              size={32}
              color={theme.colors.iconDark}
            />
          </Box>
        )}
      </Box>
    </TouchableHighlight>
  );
};

export default React.memo(WeatherListItem);
