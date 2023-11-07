import {ThemeProvider} from '@shopify/restyle';
import React from 'react';

import {RootNavigator} from 'app/navigation';
import {theme} from 'app/styles';

const App = () => (
  <ThemeProvider theme={theme}>
    <RootNavigator />
  </ThemeProvider>
);

export default App;
