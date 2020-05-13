import {Button} from 'native-base';
import {StyleSheet, Text} from 'react-native';
import React from 'react';

export const ButtonCustom = ({title, onPress, disabled}) => {
  return (
    <Button
      onPress={onPress}
      style={styles.buttonCustom}
      block
      disabled={disabled}>
      <Text style={styles.textTitle}>{title}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  buttonCustom: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'grey',
    margin: 3,
  },
  textTitle: {
    fontSize: 22,
  },
});
