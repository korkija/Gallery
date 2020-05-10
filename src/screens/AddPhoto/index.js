import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {SelectPhoto} from '../../components/SelectPhoto/SelectPhoto';

export class AddPhotoScreen extends Component {
  render() {
    return (
      <View>
        <View>
          <Text>Hello add Photo</Text>
          <SelectPhoto />
        </View>
      </View>
    );
  }
}
