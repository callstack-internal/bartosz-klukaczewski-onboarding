import React from 'react';

import WeatherData from 'app/components/WeatherData';
import {weather, renderWithTheme, screen} from 'app/testing';

const props = {weather};

describe('WeatherData component', () => {
  it('should render when data is provided', () => {
    renderWithTheme(<WeatherData {...props} />);
  });

  it('should render all 4 rows with labels and values', async () => {
    renderWithTheme(<WeatherData {...props} />);
    const labels = await screen.findAllByTestId('GenericListItemLabel');
    expect(labels.length).toBe(4);
    const values = await screen.findAllByTestId('GenericListItemValue');
    expect(values.length).toBe(4);
  });
});
