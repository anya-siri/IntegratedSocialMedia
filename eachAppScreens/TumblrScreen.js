import {View,Text,StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

function TumblrScreen(){

return (
    <WebView
      source={{ uri: 'https://www.tumblr.com/explore/trending' }}
      style={{ flex: 1 }}
    />
  );
};


export default TumblrScreen;

