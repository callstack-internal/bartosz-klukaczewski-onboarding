import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import {WeatherData} from 'app/components';
import WeatherListItem from 'app/components/WeatherListItem';
import {Route, ScreenProp} from 'app/navigation';
import {theme} from 'app/styles';

type Props = ScreenProp<Route.WeatherDetail>;

const WeatherDetailScreen = ({route}: Props) => {
  const {weather} = route.params;
  return (
    <ScrollView style={styles.container}>
      <WeatherListItem weather={weather} />
      <WeatherData weather={weather} />
    </ScrollView>
  );
};

export default React.memo(WeatherDetailScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
  },
});
