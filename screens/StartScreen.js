import React, { useEffect, useState } from 'react';
import { View, ImageBackground, ActivityIndicator, StyleSheet } from 'react-native';

const StartScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('AppsScreen');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  if (isLoading) {
    return (
      <ImageBackground
        style={styles.background}
        source={require('../assets/secondimage.jpg')}
      >
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="white" />
        </View>
      </ImageBackground>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
  loading: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 20,
    borderRadius: 10,
  },
});

export default StartScreen;
