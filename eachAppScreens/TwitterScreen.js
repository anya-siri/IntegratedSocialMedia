
import {View,Text,StyleSheet} from 'react-native';
import React, { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import axios from 'axios';

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

