import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
import Header from './src/components/Header';

const App = () => {
  return (
    <View>
      <Header headerText={ 'Albums' } />
    </View>
  )
};

AppRegistry.registerComponent('albums', () => App);
