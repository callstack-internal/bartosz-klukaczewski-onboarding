import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import StackNavigator from './StackNavigator';

const RootNavigator = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default RootNavigator;
