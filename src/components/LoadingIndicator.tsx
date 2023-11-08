import {createBox} from '@shopify/restyle';
import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Theme} from 'app/styles';

const Container = createBox<Theme>();

const LoadingIndicator = () => (
  <Container
    flex={1}
    alignItems={'center'}
    justifyContent={'center'}
    paddingBottom="xl">
    <ActivityIndicator size="large" />
  </Container>
);

export default React.memo(LoadingIndicator);
