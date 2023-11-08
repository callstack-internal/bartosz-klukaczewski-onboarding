import React from 'react';
import {View} from 'react-native';

import {Route, ScreenProp} from 'app/navigation';

type Props = ScreenProp<Route.WeatherDetail>;

const WeatherDetailScreen = ({}: Props) => <View />;

export default React.memo(WeatherDetailScreen);
