import { AppRegistry } from 'react-native';
import App from './App';
import { View } from 'react-native';

const rootComponent = () => (
  <View style={{ flex: 1 }}>
    <App />
  </View>
);

AppRegistry.registerComponent('App', () => rootComponent);
