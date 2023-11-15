import {WeatherListScreen} from 'app/screens';
import {
  screen,
  mswServer,
  renderAsScreen,
  mockWeatherGroupResponseFailure,
  waitFor,
} from 'app/testing';

describe('WeatherListScreen component', () => {
  it('should render', () => {
    renderAsScreen(WeatherListScreen, 'weatherList');
  });

  it('should render loading indicator when data is not yet available', () => {
    renderAsScreen(WeatherListScreen);
    const loadingIndicator = screen.queryByRole('progressbar', {
      busy: true,
    });
    expect(loadingIndicator).toBeTruthy();
  });

  it('should render weather after data is fetched', async () => {
    renderAsScreen(WeatherListScreen, 'weatherList');
    await waitFor(() => {
      expect(screen.findByText('Kyiv')).toBeTruthy();
      expect(screen.findByText('Sumy')).toBeTruthy();
    });
  });

  it('should render error message when data fails to fetch', async () => {
    mswServer.use(mockWeatherGroupResponseFailure);
    renderAsScreen(WeatherListScreen, 'weatherList');
    await waitFor(() => {
      expect(screen.findByTestId('WeatherListScreenError')).toBeTruthy();
    });
  });
});
