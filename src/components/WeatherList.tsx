import {ListRenderItemInfo} from '@react-native/virtualized-lists';
import React, {useCallback} from 'react';
import {FlatList} from 'react-native';

import {types} from 'app/constants';

import WeatherListItem from './WeatherListItem';

interface Props {
  data: types.Weather[];
}

const WeatherList: React.FC<Props> = ({data}) => {
  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<types.Weather>) => (
      <WeatherListItem locationWeather={item} />
    ),
    [],
  );

  return <FlatList data={data} renderItem={renderItem} />;
};

export default WeatherList;
