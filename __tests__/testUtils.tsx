import {ThemeProvider} from '@shopify/restyle';
import {render as _render} from '@testing-library/react-native';
import React from 'react';

import {theme} from 'app/styles';

export * from '@testing-library/react-native';

export const render = (component: React.ReactElement) =>
  _render(component, {
    wrapper: ({children}) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
  });
