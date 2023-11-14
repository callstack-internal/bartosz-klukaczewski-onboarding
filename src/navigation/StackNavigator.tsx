import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {LocationButton} from 'app/components';
import {NavigationParamList} from 'app/navigation';
import {WeatherDetailScreen, WeatherListScreen} from 'app/screens';

import {Route} from './routes';

const Stack = createNativeStackNavigator<NavigationParamList>();

const StackNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Route.WeatherList}
      component={WeatherListScreen}
      options={{title: 'Weather', headerRight: () => <LocationButton />}}
    />
    <Stack.Screen name={Route.WeatherDetail} component={WeatherDetailScreen} />
  </Stack.Navigator>
);

export default StackNavigator;
