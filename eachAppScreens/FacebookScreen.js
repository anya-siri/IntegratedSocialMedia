import {View,Text,StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

function FacebookScreen(){
   
    const facebookUrl = 'https://www.facebook.com/hashtag/trending/';

    return (
      <WebView
        source={{ uri: facebookUrl }}
        style={{ flex: 1 }}
      />)
}

export default FacebookScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
});