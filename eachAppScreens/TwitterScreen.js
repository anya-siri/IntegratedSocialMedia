import {View} from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

const TwitterScreen = () => {

    return (
        <View style={{ flex: 1 }}>
          <WebView
            source={{ uri: 'https://twitter.com/i/trends' }}
            style={{ flex: 1 }}
          />
        </View>
      );
}

export default TwitterScreen;

