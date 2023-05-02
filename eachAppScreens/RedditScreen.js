import {View,Text,StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

function RedditScreen(){

return (
    <WebView
      source={{ uri: 'https://www.reddit.com/r/popular/?sort=hot' }}
      style={{ flex: 1 }}
    />
  );
};

export default RedditScreen;

