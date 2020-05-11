import React, {Component} from 'react';
import {View} from 'react-native';
import {SelectPhoto} from '../../components/SelectPhoto/SelectPhoto';

export class AddPhotoScreen extends Component {
  render() {
    return (
      <View>
        <View>
          <SelectPhoto />
        </View>
      </View>
    );
  }
}
