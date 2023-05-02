import {View,Text,StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

function DiscordScreen(){

return (
    <WebView
      source={{ uri: 'https://discord.com/bots/trending' }}
      style={{ flex: 1 }}
    />
  );
};
export default DiscordScreen;

