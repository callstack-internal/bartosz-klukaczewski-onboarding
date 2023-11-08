import {ListRenderItemInfo} from '@react-native/virtualized-lists';
import React, {useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {types} from 'app/constants';
import {theme} from 'app/styles';

import WeatherListItem from './WeatherListItem';

interface Props {
  data: types.Weather[];
}

const WeatherList = ({data}: Props) => {
  const {bottom} = useSafeAreaInsets();

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<types.Weather>) => (
      <WeatherListItem weather={item} asButton />
    ),
    [],
  );

  const keyExtractor = useCallback((item: types.Weather) => item.id, []);

  return (
    <FlatList
      style={styles.contentContainer}
      contentContainerStyle={{paddingBottom: bottom}}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default WeatherList;

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: theme.colors.mainBackground,
  },
});
