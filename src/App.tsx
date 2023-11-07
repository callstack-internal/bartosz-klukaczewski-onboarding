import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';

import {RootNavigator} from 'app/navigation';
import {theme} from 'app/styles';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <RootNavigator />
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
