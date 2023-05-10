import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loader = () =>  (
  <View style={{ minHeight: '95vh', justifyContent: 'center' }}>
    <View style={{ alignItems: 'center', height: '80vh' }}>
      <ActivityIndicator />
    </View>
  </View>
);

export default Loader;
