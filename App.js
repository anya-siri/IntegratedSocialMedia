import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppsScreen from './screens/AppsScreen';
import StartScreen from './screens/StartScreen';

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./assets/firstimage.png')}
        />
        <Text style={styles.textstyle}>Unified Social Media</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="AppsScreen" component={AppsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A2929',
  },
  textstyle: {
    color: '#C4BBBB',
  },
  image: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
  },
});
