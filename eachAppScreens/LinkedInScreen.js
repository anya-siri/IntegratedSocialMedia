import {View,Text,StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

function LinkedInScreen(){

return (
    <WebView
      source={{ uri: 'https://www.linkedin.com/search/results/content/?keywords=trending&origin=FACETED_SEARCH&contentType=ARTICLE' }}
      style={{ flex: 1 }}
    />
  );
};

export default LinkedInScreen;
