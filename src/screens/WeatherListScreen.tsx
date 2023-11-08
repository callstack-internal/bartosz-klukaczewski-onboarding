import {createText} from '@shopify/restyle';
import {useQuery} from '@tanstack/react-query';
import React from 'react';

import {LoadingIndicator, WeatherList} from 'app/components';
import {Route, ScreenProp} from 'app/navigation';
import {getWeatherList} from 'app/services/weatherService';
import {Theme} from 'app/styles';

const Text = createText<Theme>();

type Props = ScreenProp<Route.WeatherList>;

const WeatherListScreen = ({}: Props) => {
  const query = useQuery({queryKey: ['weatherList'], queryFn: getWeatherList});

  if (query.isPending) {
    return <LoadingIndicator />;
  }

  if (query.isError) {
    return <Text>{query.error.message}</Text>;
  }

  return <WeatherList data={query.data} />;
};

export default React.memo(WeatherListScreen);
