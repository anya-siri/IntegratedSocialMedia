import {View,Text,StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

function YouTubeScreen(){
    const youtubeUrl = 'https://www.youtube.com/feed/trending?gl=IN';

  return (
    <WebView
      source={{ uri: youtubeUrl }}
      style={{ flex: 1 }}
    />
  );
  
}

export default YouTubeScreen;

