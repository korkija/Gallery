import React from 'react';
import {SmallCardPhoto} from '../SmallCardPhoto/SmallCardPhoto';
import {FlatList} from 'react-native';

export const ListPhotos = ({photosList, takePicture}) => {
  return (
    <FlatList
      data={photosList}
      renderItem={({item}) => (
        <SmallCardPhoto url={item.url} date={item.date} onPress={takePicture} />
      )}
      keyExtractor={item => item.date + (Math.random() + 1)}
    />
  );
};
