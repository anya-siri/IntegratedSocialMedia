import {View,Text,StyleSheet} from 'react-native';
import { FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
// import React from 'react';
import { WebView } from 'react-native-webview';

   

function InstagramScreen() {

  const instagramUrl = 'https://www.instagram.com/explore/';

  return (
    <WebView
      source={{ uri: instagramUrl }}
      style={{ flex: 1 }}
    />
  );
  }
    
export default InstagramScreen;

