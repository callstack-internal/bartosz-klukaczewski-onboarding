export {default as RootNavigator} from './RootNavigator';
export {Route} from './routes';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Route} from './routes';

export type NavigationParams = {
  [Route.WeatherList]: undefined | {};
  [Route.WeatherDetail]: undefined | {};
};

export type ScreenProp<R extends keyof NavigationParams> =
  NativeStackScreenProps<NavigationParams, R>;
