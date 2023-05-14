import React from 'react';
import { View, StatusBar, FlatList, StyleSheet, ImageBackground, Image } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';


import { CATEGORIES } from "../models/dummy-data";
import Box from "../components/Box";
import InstagramScreen from "../eachAppScreens/InstagramScreen";
import FacebookScreen from "../eachAppScreens/FacebookScreen";
import TwitterScreen from "../eachAppScreens/TwitterScreen";
import YouTubeScreen from "../eachAppScreens/YouTubeScreen";
import SnapchatScreen from "../eachAppScreens/SnapchatScreen";
import LinkedInScreen from "../eachAppScreens/LinkedInScreen";
import RedditScreen from "../eachAppScreens/RedditScreen";
import PinterestScreen from "../eachAppScreens/PinterestScreen";
import TumblrScreen from "../eachAppScreens/TumblrScreen";
import DiscordScreen from "../eachAppScreens/DiscordScreen";

const Stack = createNativeStackNavigator();

function AppListScreen() {
    const navigation = useNavigation();

    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate(itemData.item.title);
        }

        return (
            <Box
                title={itemData.item.title}
                color={itemData.item.color}
                source={itemData.item.imageUri}
                onPress={pressHandler}
            />
        );
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
}

function LinearGradientScreen() {
    return (
        <LinearGradient colors={['#E33489', '#E58541']} style={styles.rootScreen}>
            <ImageBackground
                style={styles.rootScreen}
                imageStyle={styles.image}
                source={require('../assets/image1.png')}
            >
                <AppListScreen />
            </ImageBackground>
        </LinearGradient>
    );
}

function AppsScreen() {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle='light-content' backgroundColor='#000000' />
            <Stack.Navigator
                screenOptions={{
                    headerTintColor: '#FFFFFF',
                    headerStyle: {
                        backgroundColor: '#0F0E0E',
                    },
                }}>
                <Stack.Screen
                    name="Choose a social media app:-"
                    component={LinearGradientScreen}
                    options={{
                        headerTintColor: '#FFFFFF',
                        headerStyle: {
                            backgroundColor: '#79154A',
                        },
                    }}
                />
                <Stack.Screen name="Instagram" component={InstagramScreen} />
                <Stack.Screen name="Facebook" component={FacebookScreen} />
                <Stack.Screen name="Twitter" component={TwitterScreen} />
                <Stack.Screen name="YouTube"
                    component={YouTubeScreen}
                    options={{
                        headerTintColor: '#000000',
                        headerStyle: {backgroundColor: '#FFFFFF',},
                        headerTitle: () => <Image source={require('../assets/applogos2/youtube.png')} style={{ width: 125, height: 35 }} />,
                    }} />
                <Stack.Screen name="Snapchat" component={SnapchatScreen} />
                <Stack.Screen name="LinkedIn" component={LinkedInScreen} />
                <Stack.Screen name="Reddit"
                    component={RedditScreen} 
                    options={{
                        headerTintColor: '#000000',
                        headerStyle: {backgroundColor: '#FFFFFF',},
                        headerTitle: () => <Image source={require('../assets/applogos2/reddit.png')} style={{ width: 110, height: 40}} />,
                    }} />
                <Stack.Screen name="Pinterest" component={PinterestScreen} />
                <Stack.Screen name="Tumblr" component={TumblrScreen} />
                <Stack.Screen name="Discord" component={DiscordScreen} />
            </Stack.Navigator>
        </View>
    );
}

export default AppsScreen;

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    image: {
        opacity: 0.2,
    },
});
