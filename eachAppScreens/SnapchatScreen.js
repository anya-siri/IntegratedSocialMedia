import { WebView } from 'react-native-webview';

function SnapchatScreen(){

return (
    <WebView
      source={{ uri: 'https://www.snapchat.com/discover?web_client_id=8fbad764-dfa0-4155-9592-fc80aeb9cec7' }}
      style={{ flex: 1 }}
    />
  );
};

export default SnapchatScreen;