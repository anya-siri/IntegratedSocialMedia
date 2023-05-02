import { WebView } from 'react-native-webview';
import { TextInput } from 'react-native';

function PinterestScreen(){
    
    const pinterestUrl = 'https://in.pinterest.com/today/';

    const handleSearch = (text) => {
      const url = `${pinterestUrl}search/pins/?q=${encodeURIComponent(text)}`;
      this.webViewRef.injectJavaScript(`window.location.href = '${url}'`);
    };
  
    return (
      <>
        <TextInput
          placeholder="Search Pinterest"
          onSubmitEditing={(event) => handleSearch(event.nativeEvent.text)}
        />
        <WebView
          source={{ uri: pinterestUrl }}
          style={{ flex: 1 }}
          ref={(webView) => (this.webViewRef = webView)}
        />
      </>
    );
}

export default PinterestScreen;

