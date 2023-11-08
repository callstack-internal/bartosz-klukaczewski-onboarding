export {default as RootNavigator} from './RootNavigator';
export {Route} from './routes';

import {useNavigation as _useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {types} from 'app/constants';

import {Route} from './routes';

export type NavigationParamList = {
  [Route.WeatherList]: undefined;
  [Route.WeatherDetail]: {
    weather: types.Weather;
  };
};

export type ScreenProp<R extends keyof NavigationParamList> =
  NativeStackScreenProps<NavigationParamList, R>;

export type RouteProp = NativeStackNavigationProp<NavigationParamList>;

export const useNavigation = () => _useNavigation<RouteProp>();
