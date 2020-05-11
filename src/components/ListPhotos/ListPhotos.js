import React from 'react';
import {SmallCardPhoto} from '../SmallCardPhoto/SmallCardPhoto';
import {FlatList} from 'react-native';

export const ListPhotos = ({photosList}) => {
  return (
    <FlatList
      data={photosList}
      renderItem={({item}) => (
        <SmallCardPhoto url={item.url} date={item.date} />
      )}
      keyExtractor={item => item.date}
    />
  );
};
