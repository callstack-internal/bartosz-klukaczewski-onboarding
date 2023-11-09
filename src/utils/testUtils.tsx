import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {render as _render} from '@testing-library/react-native';
import React from 'react';

import {types} from 'app/constants';
import {theme} from 'app/styles';

export * from '@testing-library/react-native';

export const render = (component: React.ReactElement) =>
  _render(component, {
    wrapper: ({children}) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
  });

export const renderWithNavigation = (component: React.ReactElement) =>
  _render(component, {
    wrapper: ({children}) => (
      <NavigationContainer>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </NavigationContainer>
    ),
  });

export const weather: types.Weather = {
  id: '1',
  locationName: 'Gdansk',
  weatherStatus: 'Clear',
  temperature: 21,
  temperatureUnit: '℃',
  humidity: 60,
  pressure: 1012,
  windSpeed: 3.2,
  cloudCoverage: 6,
  icon: '01d',
};
