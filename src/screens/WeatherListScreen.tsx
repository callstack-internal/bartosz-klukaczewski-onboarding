import React from 'react';
import {View} from 'react-native';

import {Route, ScreenProp} from 'app/navigation';

interface Props extends ScreenProp<Route.WeatherList> {}

const WeatherListScreen: React.FC<Props> = () => <View />;

export default React.memo(WeatherListScreen);
