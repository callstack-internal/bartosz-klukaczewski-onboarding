export {default as RootNavigator} from './RootNavigator';
export {Route} from './routes';

import {useNavigation as _useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {types} from 'app/constants';

import {Route} from './routes';

export type NavigationParams = {
  [Route.WeatherList]: undefined | {};
  [Route.WeatherDetail]: {
    weather: types.Weather;
  };
};

export type ScreenProp<R extends keyof NavigationParams> =
  NativeStackScreenProps<NavigationParams, R>;

export type RouteProp = NativeStackNavigationProp<NavigationParams>;

export const useNavigation = () => _useNavigation<RouteProp>();
