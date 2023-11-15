import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {render} from '@testing-library/react-native';
import React from 'react';

import {theme} from 'app/styles';

const getClient = (queryKey: string) =>
  new QueryClient({
    defaultOptions: {
      queries: {
        queryKey: [queryKey],
        retry: false,
      },
    },
  });

export const renderWithTheme = (component: React.ReactElement) =>
  render(component, {
    wrapper: ({children}) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
  });

export const renderWithNavigation = (component: React.ReactElement) =>
  render(component, {
    wrapper: ({children}) => (
      <ThemeProvider theme={theme}>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    ),
  });

export const renderAsScreen = (
  component: React.ComponentType<{navigation: any; route: any}>,
  queryKey = '',
  screenName = 'screen',
  initialParams = {},
) => {
  const testQueryClient = getClient(queryKey);

  const Stack = createNativeStackNavigator();

  return render(
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={testQueryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={screenName}
              initialParams={initialParams}
              component={component}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </ThemeProvider>,
  );
};
