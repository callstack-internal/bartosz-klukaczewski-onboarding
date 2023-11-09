import React from 'react';

import WeatherListItem from 'app/components/WeatherListItem';
import {weather, renderWithNavigation, screen, fireEvent} from 'app/testing';

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNavigation = jest.requireActual('@react-navigation/native');
  return {
    ...actualNavigation,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

const props = {weather};

describe('WeatherListItem component', () => {
  beforeEach(() => {
    mockedNavigate.mockClear();
  });

  it('should render when data is provided', () => {
    renderWithNavigation(<WeatherListItem {...props} />);
  });

  it('should call navigate on press', async () => {
    renderWithNavigation(<WeatherListItem {...props} asButton />);
    const button = await screen.findByTestId('WeatherListItemButton');
    fireEvent.press(button);
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  });

  it('should enable button if asButton is provided', async () => {
    renderWithNavigation(<WeatherListItem {...props} asButton />);
    const button = await screen.findByTestId('WeatherListItemButton');
    expect(button).toBeEnabled();
  });

  it('should disable button if asButton is not provided', async () => {
    renderWithNavigation(<WeatherListItem {...props} />);
    const button = await screen.findByTestId('WeatherListItemButton');
    expect(button).toBeDisabled();
  });

  it('should render chevron if asButton is provided', async () => {
    renderWithNavigation(<WeatherListItem {...props} asButton />);
    const chevron = await screen.findByTestId('WeatherListItemChevronRight');
    expect(chevron).toBeTruthy();
  });

  it('should not render chevron if asButton is not provided', async () => {
    renderWithNavigation(<WeatherListItem {...props} />);
    const chevron = await screen.queryByTestId('WeatherListItemChevronRight');
    expect(chevron).toBeFalsy();
  });
});
